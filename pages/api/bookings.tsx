import pool from '../../db'; // Adjust the path as necessary

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { coach, student, dateTime, booked } = (req.body);
            
            // Insert into the database
            const [result] = await pool.query(
                'INSERT INTO booking (coach, student, dateTime, booked) VALUES (?, ?, ?, ?)',
                [coach, student, dateTime, booked]
            );
            
            // Response
            res.status(201).json({ coach, student, dateTime, booked });
        } catch (error) {
            console.error('Database insertion error:', error);
            res.status(500).json({ message: error.message });
        }
    } else if (req.method === 'GET') {
      const { coach } = req.query; 
        try {
            const [rows] = await pool.query(
                'SELECT * FROM booking WHERE coach = ?',
                [coach]
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
