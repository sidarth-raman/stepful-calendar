// pages/CoachPage.tsx
import { table } from 'console';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CalendarPicker from '../components/CalendarPicker';


const CoachPage: React.FC = () => {
    const [role, setRole] = useState<string>('');
    const [coaches, setCoaches] = useState([]);

    const [selectedCoach, setSelectedCoach] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const [bookings, setBookings] = useState([]);
    const [filteredAndSortedBookings, setFilteredAndSortedBookings] = useState([]);

     //Navigate between Coach and Student View
     const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedRole = event.target.value;
      setRole(selectedRole);
  
      if (selectedRole === 'coach') {
        router.push('/coachPage');
      } else if (selectedRole === 'student') {
        router.push('/studentPage');
      }
    };

    //Sorts bookings by Date
    useEffect(() => {
        if (bookings) {
            const sortedBookings = bookings.sort((a, b) => {
            const dateA = new Date(a.DateTime).getTime();
            const dateB = new Date(b.DateTime).getTime();
            return dateA - dateB;
            });
            
            setFilteredAndSortedBookings(sortedBookings);
        }
    }, [selectedCoach, bookings]);
    const router = useRouter();

  //Fetch Coach's Names 
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

    //Fetch Coach's Bookings
    useEffect(() => {
      if (selectedCoach) {
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
    

    //Change Coach
    const handleCoachChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = event.target.value;
        setSelectedCoach(selected);
    }

    //Date Picker Change
    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    //Convert Date to SQL Compatible date
    function toSQLDatetime(date) {
      const pad = (n) => n.toString().padStart(2, '0');
  
      const year = date.getFullYear();
      const month = pad(date.getMonth() + 1);
      const day = pad(date.getDate());
      const hours = pad(date.getHours());
      const minutes = pad(date.getMinutes());
      const seconds = pad(date.getSeconds());
  
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  //Add a Booking
  const handleBooking = () => {
    if (selectedDate && selectedCoach) {
      console.log(selectedDate);
        fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                coach: selectedCoach,
                student: "null",  // Replace "null" with actual student info if available
                dateTime: toSQLDatetime(selectedDate),  // Convert to ISO format
                booked: false  // Assuming a default value
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log('Booking response:', data);
            // Handle booking response here, e.g., update state or UI
        })
        .catch(err => console.error('Error creating booking:', err));
    } else {
        alert('Please select a date and time, and choose a coach first.');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Coach Page</h1>
        <p>Welcome, Coach!</p>
      </div>

      <div className="role-selection">
        <label htmlFor="role">Select your role:</label>
        <select id="role" value={role} onChange={handleChange}>
          <option value="">--Choose a role--</option>
          <option value="coach">Coach</option>
          <option value="student">Student</option>
        </select>
      </div>

      <div className="coach-selection">
        <h2>Select which coach you are:</h2>
        <select
          id="coach-select"
          value={selectedCoach}
          onChange={handleCoachChange}
        >
          <option value="">--Select a Coach--</option>
          {coaches.map((coach, index) => (
            <option key={index}>{coach.name}</option>
          ))}
        </select>
        {selectedCoach && <p>Selected Coach: {selectedCoach}</p>}
      </div>

      <CalendarPicker
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      />

      <button className="add-button" onClick={handleBooking}>
        Add Date and Time to List
      </button>

      <div className="bookings">
        <h2>Bookings for Coach: {selectedCoach}</h2>
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
                <td>{booking.Booked ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Upcoming bookings for Coach: {selectedCoach}</h2>
        <table>
          <thead>
            <tr>
              <th>Coach</th>
              <th>Student</th>
              <th>Date</th>
              <th>Booked</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedBookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.Coach}</td>
                <td>{booking.Student}</td>
                <td>{booking.DateTime}</td>
                <td>{booking.Booked ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default CoachPage;