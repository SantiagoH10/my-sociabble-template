//Basic syntax for a Vercel handler endpoint

export default function handler(req, res) {
  res.status(200).json({ message: 'Hello World' })
}
