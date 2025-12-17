let lastBeep = {
  count: 0,
  seq: 0
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { count, seq } = req.body;

    lastBeep = {
      count,
      seq
    };

    return res.status(200).json({ ok: true });
  }

  if (req.method === 'GET') {
    return res.status(200).json(lastBeep);
  }

  res.status(405).end();
}
