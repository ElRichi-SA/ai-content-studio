const API_URL = "http://127.0.0.1:8000";

export async function checkApiHealth() {
  const response = await fetch(`${API_URL}/health`);

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
}
