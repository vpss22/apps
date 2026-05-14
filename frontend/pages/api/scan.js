export default async function handler(req, res) {
  const apiUrl = process.env.BACKEND_URL || 'http://localhost:8000';
  const response = await fetch(`${apiUrl}/scan`);
  const data = await response.json();
  res.status(200).json(data);
}