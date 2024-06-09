// pages/CoachPage.tsx
import { table } from 'console';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CalendarPicker from '../components/CalendarPicker';



const CoachPage: React.FC = () => {
    const [coaches, setCoaches] = useState([]);
    const [selectedCoach, setSelectedCoach] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [bookings, setBookings] = useState([]);

    const [filteredAndSortedBookings, setFilteredAndSortedBookings] = useState([]);

    useEffect(() => {
        if (bookings) {
            // Filter bookings where booked is true for the given coach
            const filteredBookings = bookings.filter(booking => booking);

            const sortedBookings = filteredBookings.sort((a, b) => {
              const dateA = new Date(a.date).getTime();
              const dateB = new Date(b.date).getTime();
              return dateA - dateB;
            });
            
            // Update state with filtered and sorted bookings
            setFilteredAndSortedBookings(sortedBookings);
        }
    }, [selectedCoach, bookings]);
    const router = useRouter();


  //Fetch Coaches Names Data
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

    //Fetch Coach Bookings
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

  //Select Different Coach
    const handleCoachChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = event.target.value;
        setSelectedCoach(selected);
    }


    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

  //Add Booking
  const handleBooking = () => {
    if (selectedDate && selectedCoach) {
        fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                coach: selectedCoach,
                student: "null",  // Replace "null" with actual student info if available
                date: selectedDate.toISOString(),  // Convert to ISO format
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
      <div>
        <div>
            <h1>Coach Page</h1>
            <p>Welcome, Coach!</p>
        </div>
        <label htmlFor="role">Select your role: </label>
        <select id="role" value={role} onChange={handleChange}>
          <option value="">--Choose a role--</option>
          <option value="coach">Coach</option>
          <option value="student">Student</option>
        </select>
        <div style={{ padding: '20px' }}>
      <h1>Coach Page</h1>
      <label htmlFor="coach-select">Select which coach you are:</label>
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
    <CalendarPicker
                selectedDate={selectedDate}
                onDateChange={handleDateChange}
            />
      <button onClick={handleBooking}>
                Add Date and Time to List
            </button>

            <div>
            <h1>Bookings for Coach: {selectedCoach}</h1>
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
                    {bookings.map((booking) => (
                        <tr>
                            <td>{booking.Coach}</td>
                            <td>{booking.Student}</td>
                            <td>{booking.Date}</td>
                            <td>{booking.Booked ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1>Upcoming bookings for Coach: {selectedCoach}</h1>
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
                    {filteredAndSortedBookings.map((booking) => (
                        <tr>
                            <td>{booking.Coach}</td>
                            <td>{booking.Student}</td>
                            <td>{booking.Date}</td>
                            <td>{booking.Booked ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    );
};

export default CoachPage;