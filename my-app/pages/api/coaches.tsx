import pool from '../../db';

export default async function handler(req, res) {
    if (req.method === 'GET') {
      try {
        const [rows] = await pool.query('SELECT * FROM coaches');
        res.status(200).json(rows);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } 