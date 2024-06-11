// Import the database pool
import pool from '../../db';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { coach, student, dateTime, satisfaction, notes } = req.body;

            // Validate input data
            if (typeof satisfaction !== 'number' || satisfaction < 1 || satisfaction > 5) {
                return res.status(400).json({ message: 'Satisfaction must be a number between 1 and 5' });
            }

            // Insert the review into the database
            const [result] = await pool.query(
                'INSERT INTO review (Coach, Student, DateTime, Satisfaction, Notes) VALUES (?, ?, ?, ?, ?)',
                [coach, student, dateTime, satisfaction, notes]
            );

            // Respond with the inserted review's details
            res.status(201).json({
                coach, student, dateTime, satisfaction, notes
            });
        } catch (error) {
            console.error('Database insertion error:', error);
            res.status(500).json({ message: error.message });
        }
    } else if (req.method === 'GET') {
        try {
            const { coach } = req.query;

            // Validate input data
            if (!coach) {
                return res.status(400).json({ message: 'Coach name is required' });
            }

            // Execute SQL query to select reviews for the specified coach
            const [rows] = await pool.query(
                'SELECT * FROM review WHERE Coach = ?',
                [coach]
            );

            // Respond with the retrieved reviews
            res.status(200).json(rows);
        } catch (error) {
            console.error('Database query error:', error);
            res.status(500).json({ message: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
