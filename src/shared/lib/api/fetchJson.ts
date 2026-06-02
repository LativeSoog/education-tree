export const fetchJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  if (!response.ok)
    throw new Error(`Failed to fetch JSON from ${url}: ${response.status}`);

  return response.json() as Promise<T>;
};
