import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const StudentPage: React.FC = () => {
    const [role, setRole] = useState<string>('');
    const [selectedCoach, setSelectedCoach] = useState<string>('');
    const [selectedStudent, setSelectedStudent] = useState<string>('');
    const [coaches, setCoaches] = useState([]);
    const [students, setStudents] = useState([]);
    const router = useRouter();
    const [bookings, setBookings] = useState([]);


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


      //Fetch Coaches Data
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
    
  
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedRole = event.target.value;
      setRole(selectedRole);
  
      if (selectedRole === 'coach') {
        router.push('/coachPage');
      } else if (selectedRole === 'student') {
        router.push('/studentPage');
      }
    };

    //Select Different Coach
    const handleCoachChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selected = event.target.value;
      setSelectedCoach(selected);
  }

  const handleStudentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    setSelectedStudent(selected);
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
      <div>
        <div>
            <h1>Student Page</h1>
            <p>Welcome, Student!</p>
        </div>
        <label htmlFor="role">Select your role: </label>
        <select id="role" value={role} onChange={handleChange}>
          <option value="">--Choose a role--</option>
          <option value="coach">Coach</option>
          <option value="student">Student</option>
        </select>

        <div style={{ padding: '20px' }}>
      

        <h1>Student Page</h1>
      <label htmlFor="student-select">Select which student you are:</label>
      <select
        id="student-select"
        value={selectedStudent}
        onChange={handleStudentChange}
        style={{ marginLeft: '10px', padding: '5px' }}
      >
        <option value="">--Select a Student--</option>
        {students.map((student) => (
          <option>
            {student.name}
          </option>
        ))}
      </select>
      {selectedStudent && <p>Selected Student: {selectedStudent}</p>}








      <label htmlFor="coach-select">Select which coach you want to book with:</label>
      <select
        id="coach-select"
        value={selectedCoach}
        onChange={handleCoachChange}
        style={{ marginLeft: '10px', padding: '5px' }}
      >
        <option value="">--Select a Coach--</option>
        {coaches.map((coach) => (
          <option>
            {coach.name}
          </option>
        ))}
      </select>
      {selectedCoach && <p>Selected Coach: {selectedCoach}</p>}
    </div>

    <h1>Bookings for Coach: {selectedCoach}</h1>
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
                        <button onClick={() => handleBook(selectedStudent ,booking.id)}>Book</button>
                    </>
                )}
            </td>
        </tr>
    ))}
</tbody>
                </table>
      </div>
      
    );
};

export default StudentPage;