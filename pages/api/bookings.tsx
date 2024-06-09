import pool from '../../db'; // Adjust the path as necessary

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { coach, student, date, booked } = (req.body);
            
            // Insert into the database
            const [result] = await pool.query(
                'INSERT INTO booking (coach, student, date, booked) VALUES (?, ?, ?, ?)',
                [coach, student, date, booked]
            );
            
            // Respond with the inserted booking details
            res.status(201).json({ coach, student, date, booked });
        } catch (error) {
            console.error('Database insertion error:', error);
            res.status(500).json({ message: error.message });
        }
    } else if (req.method === 'GET') {
      const { coach } = req.query; // Assume coach is passed as a query parameter

        try {
            // Execute the SELECT query to get all bookings for the given coach
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
