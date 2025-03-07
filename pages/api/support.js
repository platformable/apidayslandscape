export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const response = await fetch(
      "https://nocodb-app-agy4g.ondigitalocean.app/api/v1/db/data/noco/Platformable Operational/SupportRequest",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xc-auth": process.env.NOCODB_AUTH_TOKEN
        },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
}