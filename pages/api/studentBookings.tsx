import pool from '../../db'; // Adjust the path as necessary

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { student } = req.query; 
          try {
              const [rows] = await pool.query(
                  'SELECT * FROM booking WHERE student = ?',
                  [student]
              );
  
              // Respond with the retrieved booking data
              res.status(200).json(rows);
          } catch (error) {
              console.error('Database query error:', error);
              res.status(500).json({ message: error.message });
          }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
