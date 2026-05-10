# Dual-Remote Workflow Guide

This document explains the security setup that keeps public open-source work separate from private RxAI premium work.

---

## Setup Overview

Two remotes, one working folder:
- **`origin`** (public) — `https://github.com/Australia-md/archive.git` — open-source work only
- **`private`** (private) — `git@github.com:HoHo1979/australia-premium.git` — RxAI premium work only

A pre-push hook prevents accidental pushes of private work to the public repo.

---

## Branch Organization

| Branch | Remote | Purpose | Contains |
|---|---|---|---|
| `main` | origin | Public release branch | Open-source content only |
| `scheduling-branch` | origin | Public scheduled jobs | Dental listing automation |
| `001-simple-md-submission` | origin | Public feature branch | Simple MD submission pipeline |
| `002-rxai-premium-submission` | private | Private feature branch | RxAI premium submission (local only) |
| `003-rxai-premium-submission` | private | Private feature branch | RxAI premium features (local only) |

---

## Daily Workflow

### Public Work (open-source)
```bash
# Switch to a public branch
git checkout main
# or
git checkout scheduling-branch
# or
git checkout 001-simple-md-submission

# Make your changes, commit, and push to origin (public repo) — SAFE
git push origin [branch-name]
```

### Private Work (RxAI premium)
```bash
# Switch to a private branch
git checkout 003-rxai-premium-submission

# Make your changes, commit
git add .
git commit -m "feat: new premium feature"

# Push to private remote ONLY — you must explicitly say 'private'
git push private 003-rxai-premium-submission

# DO NOT run: git push origin (the hook will block it)
```

---

## Pre-Push Hook: How It Works

The hook at `.git/hooks/pre-push` checks every push before it happens:

| Condition | Result |
|---|---|
| Push to `private` remote | ✅ Allowed (no restrictions) |
| Push to `origin` + branch is `main`, `scheduling-branch`, or `001-*` | ✅ Allowed |
| Push to `origin` + branch is `002-*` or `003-*` | 🚫 **BLOCKED** |
| Push to `origin` + commit touches `specs/002-*` or `specs/003-*` | 🚫 **BLOCKED** |

**Example block message:**
```
🚫 PUSH BLOCKED: Cannot push private branch '003-rxai-premium-submission' to public repo

   This branch contains RxAI premium work. Push to 'private' instead:
   $ git push private 003-rxai-premium-submission
```

---

## Mistake Recovery

### "I tried to push private work to origin and got blocked"

This is the hook working as intended. The push was **not** sent.

**Fix:** Push to the private remote instead.
```bash
git push private [branch-name]
```

### "I accidentally merged a private branch into main"

**DO NOT push.** The hook will block it, but you still need to undo the merge.

```bash
# Undo the merge locally (do not push)
git reset --hard HEAD~1

# Or revert the merge commit
git revert -m 1 [merge-commit-hash]
```

---

## Creating the Private GitHub Repo

You need to create the `australia-premium` repo on GitHub before first push:

1. Go to **https://github.com/new**
2. Repository name: `australia-premium`
3. **Make it PRIVATE**
4. Leave it empty (don't init README)
5. Click **Create repository**
6. Copy the HTTPS or SSH URL

The remote is already configured:
```bash
git remote -v
# origin  https://github.com/Australia-md/archive.git (fetch)
# origin  https://github.com/Australia-md/archive.git (push)
# private git@github.com:HoHo1979/australia-premium.git (fetch)
# private git@github.com:HoHo1979/australia-premium.git (push)
```

### First Push to Private
```bash
git checkout 003-rxai-premium-submission
git push -u private 003-rxai-premium-submission

# And for any other private branches:
git push -u private 002-rxai-premium-submission
```

---

## Multiple Machines or Team Members

The hook is stored in `.git/hooks/pre-push` — it's **local only**, not tracked by git.

If you clone this repo on another machine:
```bash
cd australia
# Hook is already in place locally — no action needed
git remote -v  # Both remotes should be configured
```

If you add a team member:
1. They clone: `git clone https://github.com/Australia-md/archive.git`
2. They add the private remote: `git remote add private git@github.com:HoHo1979/australia-premium.git`
3. They pull the private branch: `git fetch private` + `git checkout 003-rxai-premium-submission`
4. They clone the hook: Copy `.git/hooks/pre-push` (or it auto-exists if they clone from a branch that has the setup)

---

## Checking Remote Status

See which branches are on which remote:
```bash
# All branches with remotes
git branch -a

# See what's on origin (public)
git branch -r --list 'origin/*'

# See what's on private
git branch -r --list 'private/*'
```

---

## Emergency: Completely Disconnect Private Work

If you want to remove all private work from this folder:

```bash
# Delete local private branches
git branch -D 002-rxai-premium-submission
git branch -D 003-rxai-premium-submission

# Remove private remote
git remote remove private

# Clean up private specs (if they're still local)
rm -rf specs/002-rxai-premium-submission/
rm -rf specs/003-rxai-premium-submission/

# Commit the cleanup
git add .gitignore
git commit -m "chore: remove private remote and RxAI premium work"
git push origin main
```

---

## Summary

✅ **Safe to push:** `main`, `scheduling-branch`, `001-*` branches to `origin`
❌ **Blocked from pushing:** `002-*`, `003-*` branches to `origin`
✅ **Always safe:** Any branch to `private`

**One golden rule:** If it touches `specs/002-*` or `specs/003-*`, it goes to `private` only.

---

*Last updated: 2026-04-03 | Dual-remote security setup active*
