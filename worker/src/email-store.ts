export async function storeContributorEmail(
  issueNumber: number,
  email: string,
  kv: KVNamespace,
): Promise<void> {
  await kv.put(`email:${issueNumber}`, email, {
    expirationTtl: 2_592_000,
    metadata: null,
  });
}

export async function retrieveContributorEmail(
  issueNumber: number,
  kv: KVNamespace,
): Promise<string | null> {
  return kv.get(`email:${issueNumber}`);
}
