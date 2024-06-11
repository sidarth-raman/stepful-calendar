import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Role from '../components/Role';

const StudentPage: React.FC = () => {
    const [selectedCoach, setSelectedCoach] = useState<string>('');
    const [selectedStudent, setSelectedStudent] = useState<string>('');
    const [coaches, setCoaches] = useState([]);
    const [students, setStudents] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [studentBookings, setStudentBookings] = useState([]);

    //Get Bookings by Coach
    useEffect(() => {
      if (selectedCoach) {
        // Construct URL with query parameter
        const url = `/api/bookings?coach=${selectedCoach}`;

        // Fetch booking data
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => setBookings(data))
            .catch(err => console.error('Error fetching users:', err));
      }
    }, [selectedCoach]);

    //Get Bookings by Student
    useEffect(() => {
      if (selectedStudent) {
        // Construct URL with query parameter
        const url = `/api/studentBookings?student=${selectedStudent}`;

        // Fetch booking data
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => setStudentBookings(data))
            .catch(err => console.error('Error fetching users:', err));
      }
    }, [selectedStudent]);

    //Fetch Coaches Data
    useEffect(() => {
      fetch('/api/coaches', 
        {
          method: 'GET'
        }
      )
        .then(res => res.json())
        .then(data => setCoaches(data))
        .catch(err => console.error('Error fetching users:', err));
    }, []);


      //Fetch Student Data
      useEffect(() => {
        fetch('/api/students', 
          {
            method: 'GET'
          }
        )
          .then(res => res.json())
          .then(data => setStudents(data))
          .catch(err => console.error('Error fetching users:', err));
      }, []);

    //Select Different Coach
    const handleCoachChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selected = event.target.value;
      setSelectedCoach(selected);
  }

  const handleStudentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    setSelectedStudent(selected);
}

function getCoachPhoneNumber(coachName) {
  const coach = coaches.find(coach => coach.name === coachName);
  return coach ? coach.phoneNumber : 'N/A';
}

const handleBook = async (studentName, id) => {
  try {
      const response = await fetch('/api/updateBooking', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              student: studentName,
              bookingId: id
          })
      });

      if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage || 'Failed to update booking.');
      }

      // Booking updated successfully
      console.log('Booking updated successfully.');
  } catch (error) {
      console.error('Error updating booking:', error.message);
  }
};

  return (
    <div className="container">
      <div className="header">
        <h1>Student Page</h1>
        <p>Welcome, Student!</p>
      </div>

      <Role/>
  
      <div className="form-group" style={{ padding: '20px' }}>
        <h1>Student Page</h1>
        <label htmlFor="student-select">Select which student you are:</label>
        <select
          id="student-select"
          value={selectedStudent}
          onChange={handleStudentChange}
        >
          <option value="">--Select a Student--</option>
          {students.map((student) => (
            <option key={student.id}>
              {student.name}
            </option>
          ))}
        </select>
        <label htmlFor="coach-select">Select which coach you want to book with:</label>
        <select
          id="coach-select"
          value={selectedCoach}
          onChange={handleCoachChange}
        >
          <option value="">--Select a Coach--</option>
          {coaches.map((coach) => (
            <option key={coach.id}>
              {coach.name}
            </option>
          ))}
        </select>
      </div>

      <h1>Availability for Coach: {selectedCoach}</h1>
      <table>
        <thead>
          <tr>
            <th>Coach</th>
            <th>Student</th>
            <th>Date and Time</th>
            <th>Booked</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.Coach}</td>
              <td>{booking.Student}</td>
              <td>{booking.DateTime}</td>
              <td>
                {booking.Booked ? (
                  'Yes'
                ) : (
                  <>
                    No
                    <button onClick={() => handleBook(selectedStudent, booking.id)}>Book</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>{selectedStudent} Bookings</h1>
      <table>
        <thead>
          <tr>
            <th>Coach</th>
            <th>Student</th>
            <th>Date and Time</th>
            <th>Coach Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {studentBookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.Coach}</td>
              <td>{booking.Student}</td>
              <td>{booking.DateTime}</td>
              <td>{getCoachPhoneNumber(booking.Coach)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentPage;