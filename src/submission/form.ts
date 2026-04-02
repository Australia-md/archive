import { CATEGORIES } from './categories.js';
import { TEMPLATES, type MarkdownTemplate } from './templates.js';
import { isDomainAuthorized } from './authorized-domains.js';
import type { SubmissionCategory, WorkerErrorResponse, WorkerSuccessResponse } from './types.js';

const WORKER_URL = 'https://australia-submission-proxy.workers.dev';

const categorySelectId = 'category';
const templateSelectId = 'template';
const contentTextareaId = 'content';
const sourceUrlInputId = 'source-url';
const emailInputId = 'contributor-email';
const submitButtonId = 'submit-btn';
const statusBannerId = 'status-banner';
const formId = 'submission-form';

let currentTemplate: MarkdownTemplate | null = null;
let rateLimitIntervalId: number | null = null;
let rateLimitActive = false;
let categoryListenerAttached = false;
let templateListenerAttached = false;

document.addEventListener('DOMContentLoaded', () => {
  loadSystemStatus();
  populateCategorySelect();
  setupFormListeners();
});

async function loadSystemStatus(): Promise<void> {
  const submitButton = getButton();
  const statusBanner = getStatusBanner();

  try {
    const response = await fetch(`${WORKER_URL}/api/status`, {
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Status endpoint returned ${response.status}`);
    }

    const payload = (await response.json()) as { status?: string };
    const status = payload.status;

    clearStatusBanner(statusBanner);

    if (status === 'amber' || status === 'red') {
      submitButton.disabled = true;
      submitButton.setAttribute('aria-label', 'Submit disabled — server is not accepting submissions');
      statusBanner.textContent =
        'Server is temporarily not accepting submissions. Please check the status indicator — when it shows green, resubmit.';
      statusBanner.className = 'is-warning';
      return;
    }

    submitButton.disabled = false;
    submitButton.removeAttribute('aria-label');
    statusBanner.textContent = 'Server status is green. Submissions are open.';
    statusBanner.className = 'is-green';
  } catch {
    submitButton.disabled = false;
    clearStatusBanner(statusBanner);
  }
}

function populateCategorySelect(): void {
  const categorySelect = getSelect(categorySelectId);
  categorySelect.replaceChildren();

  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.disabled = true;
  placeholder.selected = true;
  placeholder.textContent = 'Select a category…';
  categorySelect.appendChild(placeholder);

  for (const category of CATEGORIES) {
    const option = document.createElement('option');
    option.value = category.value;
    option.textContent = category.label;
    categorySelect.appendChild(option);
  }

  if (!categoryListenerAttached) {
    categorySelect.addEventListener('change', () => {
      const value = categorySelect.value as SubmissionCategory;
      populateTemplates(value);
    });
    categoryListenerAttached = true;
  }
}

function populateTemplates(category: SubmissionCategory): void {
  const categoryTemplates = TEMPLATES.filter((t) => t.categories.includes(category));

  const templateSelect = getSelect(templateSelectId);
  templateSelect.replaceChildren();

  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.disabled = true;
  placeholder.selected = true;
  placeholder.textContent = 'Select a template…';
  templateSelect.appendChild(placeholder);

  for (const template of categoryTemplates) {
    const option = document.createElement('option');
    option.value = template.type;
    option.textContent = template.label;
    templateSelect.appendChild(option);
  }

  templateSelect.disabled = false;
  currentTemplate = null;

  if (!templateListenerAttached) {
    templateSelect.addEventListener('change', () => {
      const template = TEMPLATES.find((entry) => entry.type === templateSelect.value) ?? null;
      currentTemplate = template;
      if (template) {
        applyTemplate(template);
      }
    });
    templateListenerAttached = true;
  }
}

function applyTemplate(template: MarkdownTemplate): void {
  currentTemplate = template;
  const contentTextarea = getTextArea();
  contentTextarea.value = template.skeleton;
  clearFieldError('group-content', 'error-content');
}

function validateEmail(email: string): string | null {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return 'Enter a valid email address.';
  }
  return null;
}

function validateUrl(url: string): string | null {
  try {
    const parsedUrl = new URL(url);
    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      return 'Enter a valid http or https URL.';
    }
  } catch {
    return 'Enter a valid source URL.';
  }

  if (!isDomainAuthorized(url)) {
    return 'Source URL must be on an authorised Australian domain such as .gov.au or .edu.au.';
  }

  return null;
}

function validateContent(content: string, template: MarkdownTemplate | null): string | null {
  const trimmedContent = content.trim();
  if (trimmedContent.length < 50) {
    return 'Content must be at least 50 characters long.';
  }

  if (template && trimmedContent === template.skeleton.trim()) {
    return 'Edit the template before submitting.';
  }

  return null;
}

async function handleSubmit(event: SubmitEvent): Promise<void> {
  event.preventDefault();

  clearAllErrors();

  const categoryValue = getSelect(categorySelectId).value;
  const templateValue = getSelect(templateSelectId).value;
  const sourceUrl = getInput(sourceUrlInputId).value.trim();
  const contributorEmail = getInput(emailInputId).value.trim();
  const content = getTextArea().value;
  const submitButton = getButton();

  let hasValidationError = false;

  if (!categoryValue) {
    setFieldError('group-category', 'error-category', 'Choose a category.');
    hasValidationError = true;
  }

  if (!templateValue) {
    setFieldError('group-template', 'error-template', 'Choose a template.');
    hasValidationError = true;
  }

  const emailError = validateEmail(contributorEmail);
  if (emailError) {
    setFieldError('group-email', 'error-email', emailError);
    hasValidationError = true;
  }

  const urlError = validateUrl(sourceUrl);
  if (urlError) {
    setFieldError('group-source-url', 'error-source-url', urlError);
    hasValidationError = true;
  }

  const contentError = validateContent(content, currentTemplate);
  if (contentError) {
    setFieldError('group-content', 'error-content', contentError);
    hasValidationError = true;
  }

  if (hasValidationError) {
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = 'Submitting…';
  submitButton.setAttribute('aria-label', 'Submission in progress');

  const payload = {
    category: categoryValue,
    template: templateValue,
    sourceUrl,
    contributorEmail,
    content,
  };

  try {
    const response = await fetch(`${WORKER_URL}/api/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.status === 200) {
      const data = (await response.json()) as WorkerSuccessResponse;
      showSuccessState(data.issueUrl, data.issueNumber);
      return;
    }

    const errorBody = await parseErrorResponse(response);

    if (response.status === 429) {
      const retryAfterSeconds = errorBody.retryAfterSeconds ?? 60;
      rateLimitActive = true;
      showErrorState(
        'RATE_LIMITED',
        errorBody.error || 'Too many submissions right now. Please try again shortly.',
        retryAfterSeconds,
      );
      return;
    }

    if (response.status === 503) {
      showErrorState('SERVER_ERROR', errorBody.error || 'Server is temporarily unavailable. Please try again later.');
      return;
    }

    showErrorState('SERVER_ERROR', errorBody.error || 'Submission failed. Please try again.');
  } catch {
    showErrorState('NETWORK_ERROR', 'Network error. Please check your connection and try again.');
  } finally {
    if (document.getElementById(formId) && !rateLimitActive) {
      submitButton.disabled = false;
      submitButton.removeAttribute('aria-label');
      submitButton.textContent = 'Submit for Verification';
    }
  }
}

function showSuccessState(issueUrl: string, issueNumber: number): void {
  const mainContent = document.querySelector('main.page-content');
  if (!mainContent) {
    return;
  }

  const successHtml = [
    '<div class="success-state-container">',
    '  <div class="success-glow-bg"><div class="success-glow"></div></div>',
    '  <div class="success-icon-container">',
    '    <div class="success-icon-blur"></div>',
    '    <div class="success-icon-ring">',
    '      <span class="material-symbols-outlined">check_circle</span>',
    '    </div>',
    '  </div>',
    '  <div class="success-content">',
    '    <h2>Submitted!</h2>',
    '    <p class="receipt-label">Confirmation Receipt</p>',
    '    <p class="desc">Your reference: <a class="reference" id="success-issue-link" target="_blank" rel="noopener noreferrer"></a>. You will be emailed when verification completes.</p>',
    '  </div>',
    '  <div class="success-actions">',
    '    <button class="btn-primary-action" id="btn-submit-another">Submit Another Entry</button>',
    '    <a href="/" class="btn-secondary-action">Return to Home</a>',
    '  </div>',
    '  <div class="success-metadata-footer">',
    '    <div class="meta-group">',
    '      <p class="meta-label">Archival System</p>',
    '      <p class="meta-value-primary">v4.2.0-stable</p>',
    '    </div>',
    '    <div class="meta-divider"></div>',
    '    <div class="meta-group" style="text-align: right;">',
    '      <p class="meta-label">Timestamp</p>',
    '      <p class="meta-value-secondary">2026.ARCHIVE.01</p>',
    '    </div>',
    '  </div>',
    '</div>'
  ].join('\n');

  mainContent.innerHTML = successHtml;

  const issueLink = document.getElementById('success-issue-link');
  if (issueLink instanceof HTMLAnchorElement) {
    issueLink.textContent = 'Issue #' + String(issueNumber);
    issueLink.href = issueUrl;
  }

  const anotherBtn = document.getElementById('btn-submit-another');
  if (anotherBtn instanceof HTMLButtonElement) {
    anotherBtn.addEventListener('click', () => {
      window.location.reload();
    });
  }
}

function showErrorState(code: string, message: string, retryAfterSeconds?: number): void {
  const formError = document.getElementById('error-form');
  const statusBanner = getStatusBanner();

  clearStatusBanner(statusBanner);

  if (code === 'RATE_LIMITED' || code === 'NETWORK_ERROR' || code === 'SERVER_ERROR') {
    rateLimitActive = false;
    if (!formError) {
      return;
    }

    formError.textContent = message;
    formError.classList.add('is-visible');

    if (retryAfterSeconds && code === 'RATE_LIMITED') {
      startRateLimitCountdown(retryAfterSeconds);
    }
    return;
  }

  statusBanner.textContent = message;
  statusBanner.className = 'is-error';
}

function startRateLimitCountdown(retryAfterSeconds: number): void {
  const formError = document.getElementById('error-form');
  if (!formError) {
    return;
  }

  if (rateLimitIntervalId !== null) {
    window.clearInterval(rateLimitIntervalId);
    rateLimitIntervalId = null;
  }

  const countdown = document.createElement('time');
  countdown.dataset.rateLimitCountdown = 'true';
  countdown.setAttribute('aria-live', 'polite');
  countdown.dateTime = `PT${retryAfterSeconds}S`;

  const updateCountdown = (secondsRemaining: number): void => {
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;
    const formatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    countdown.textContent = formatted;
  };

  updateCountdown(retryAfterSeconds);
  formError.append(' Try again in ', countdown, '.');

  let remaining = retryAfterSeconds;
  rateLimitIntervalId = window.setInterval(() => {
    remaining -= 1;
    if (remaining <= 0) {
      if (rateLimitIntervalId !== null) {
        window.clearInterval(rateLimitIntervalId);
        rateLimitIntervalId = null;
      }
      rateLimitActive = false;
      clearFormError();
      const submitButton = getButton();
      submitButton.disabled = false;
      submitButton.removeAttribute('aria-label');
      submitButton.textContent = 'Submit for Verification';
      return;
    }

    updateCountdown(remaining);
  }, 1000);
}

function setupFormListeners(): void {
  const form = getForm();
  form.addEventListener('submit', async (event) => {
    await handleSubmit(event);
  });
}

function clearStatusBanner(statusBanner: HTMLOutputElement): void {
  statusBanner.textContent = '';
  statusBanner.className = '';
}

function clearAllErrors(): void {
  clearFieldError('group-category', 'error-category');
  clearFieldError('group-template', 'error-template');
  clearFieldError('group-content', 'error-content');
  clearFieldError('group-source-url', 'error-source-url');
  clearFieldError('group-email', 'error-email');
  clearFormError();
}

function clearFormError(): void {
  const formError = document.getElementById('error-form');
  if (formError) {
    formError.textContent = '';
    formError.classList.remove('is-visible');
  }
}

function setFieldError(groupId: string, errorId: string, message: string): void {
  const group = document.getElementById(groupId);
  const error = document.getElementById(errorId);

  if (!group || !error) {
    return;
  }

  group.classList.add('has-error');
  error.textContent = message;
}

function clearFieldError(groupId: string, errorId: string): void {
  const group = document.getElementById(groupId);
  const error = document.getElementById(errorId);

  if (group) {
    group.classList.remove('has-error');
  }

  if (error) {
    error.textContent = '';
  }
}

async function parseErrorResponse(response: Response): Promise<WorkerErrorResponse> {
  try {
    const data = (await response.json()) as Partial<WorkerErrorResponse>;
    return {
      error: typeof data.error === 'string' ? data.error : 'Request failed.',
      field: typeof data.field === 'string' ? data.field : undefined,
      retryAfterSeconds: typeof data.retryAfterSeconds === 'number' ? data.retryAfterSeconds : undefined,
    };
  } catch {
    return { error: 'Request failed.' };
  }
}

function getForm(): HTMLFormElement {
  const form = document.getElementById(formId);
  if (!(form instanceof HTMLFormElement)) {
    throw new Error('Submission form not found.');
  }
  return form;
}

function getSelect(id: string): HTMLSelectElement {
  const element = document.getElementById(id);
  if (!(element instanceof HTMLSelectElement)) {
    throw new Error(`Select element #${id} not found.`);
  }
  return element;
}

function getInput(id: string): HTMLInputElement {
  const element = document.getElementById(id);
  if (!(element instanceof HTMLInputElement)) {
    throw new Error(`Input element #${id} not found.`);
  }
  return element;
}

function getTextArea(): HTMLTextAreaElement {
  const element = document.getElementById(contentTextareaId);
  if (!(element instanceof HTMLTextAreaElement)) {
    throw new Error('Content textarea not found.');
  }
  return element;
}

function getButton(): HTMLButtonElement {
  const element = document.getElementById(submitButtonId);
  if (!(element instanceof HTMLButtonElement)) {
    throw new Error('Submit button not found.');
  }
  return element;
}

function getStatusBanner(): HTMLOutputElement {
  const element = document.getElementById(statusBannerId);
  if (!(element instanceof HTMLOutputElement)) {
    throw new Error('Status banner not found.');
  }
  return element;
}
