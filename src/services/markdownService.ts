export async function markdownService(url: string) {
  try {
    //cash
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return { error };
  }
}
