export const BASE_URL = 'https://expensable-api.herokuapp.com/'

export async function Fetch(...args) {
  const response = await fetch(...args)
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors);
  }
  if (response.status !== 204) {
    return await response.json();
  }
  return true;
}