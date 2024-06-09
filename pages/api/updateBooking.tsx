import pool from '../../db'; // Adjust the path as necessary

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { student, bookingId } = req.body;

            if (!student || !bookingId) {
                return res.status(400).json({ message: 'Student and bookingId are required.' });
            }

            //SQL Query 
            const query = `
                UPDATE booking 
                SET Student = ?, Booked = ? 
                WHERE id = ?;
            `;

            const [result] = await pool.query(query, [student, true, bookingId]);

            // Response
            res.status(200).json({ message: 'Booking updated successfully.' });
        } catch (error) {
            console.error('Database update error:', error);
            res.status(500).json({ message: 'Internal server error.' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed.' });
    }
}
