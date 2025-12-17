let state = {
  count: 0,
  seq: 0
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { count } = req.body;

    state.count = Number(count);
    state.seq++; // ✅ novo evento

    return res.status(200).json({ ok: true });
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      count: state.count,
      seq: state.seq
    });
  }

  res.status(405).end();
}
