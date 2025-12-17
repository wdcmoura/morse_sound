let lastBeep = 0;

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { count } = req.body;
    lastBeep = count;
    return res.status(200).json({ ok: true });
  }

  if (req.method === 'GET') {
    return res.status(200).json({ count: lastBeep });
  }

  res.status(405).end();
}
