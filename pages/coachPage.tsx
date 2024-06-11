import React, { useEffect, useState } from 'react';
import CalendarPicker from '../components/CalendarPicker';
import Role from '../components/Role';
import LeaveReview from '../components/LeaveReview'


const CoachPage: React.FC = () => {
    const [coaches, setCoaches] = useState([]);
    const [students, setStudents] = useState([]);

    const [selectedCoach, setSelectedCoach] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const [reviews, setReviews] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [filteredAndSortedBookings, setFilteredAndSortedBookings] = useState([]);
    const [pastBookings, setPastBookings] = useState([]);



    //Sorts bookings by Date
    useEffect(() => {
      if (bookings) {
        const now = new Date(); 
    
        const filteredBookings = bookings.filter(booking => {
          const bookingDateTime = new Date(booking.DateTime);
          return bookingDateTime > now && booking.Booked;
        });
    
        const sortedBookings = filteredBookings.sort((a, b) => {
          const dateA = new Date(a.DateTime).getTime();
          const dateB = new Date(b.DateTime).getTime();
          return dateA - dateB;
        });
    
        setFilteredAndSortedBookings(sortedBookings);
    
        const pastBookings = bookings.filter(booking => {
          const bookingDateTime = new Date(booking.DateTime);
          return bookingDateTime < now;
        });
    
        setPastBookings(pastBookings);
      }
    }, [selectedCoach, bookings]);
  
  //Fetch Coach's Names 
    useEffect(() => {
      console.log(coaches);
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

    //Fetch Coach's Bookings
    useEffect(() => {
      console.log()
      if (selectedCoach) {
          // Fetch booking data
          const bookingsUrl = `/api/bookings?coach=${selectedCoach}`;
          fetch(bookingsUrl)
              .then(res => {
                  if (!res.ok) {
                      throw new Error('Network response was not ok');
                  }
                  return res.json();
              })
              .then(data => setBookings(data))
              .catch(err => console.error('Error fetching bookings:', err));
  
          // Fetch coach reviews data
          const reviewsUrl = `/api/review?coach=${selectedCoach}`;
          fetch(reviewsUrl)
              .then(res => {
                  if (!res.ok) {
                      throw new Error('Network response was not ok');
                  }
                  return res.json();
              })
              .then(data => {setReviews(data)})
              .catch(err => console.error('Error fetching coach reviews:', err));
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

  function getStudentPhoneNumber(studentName) {
    const student = students.find(student => student.name === studentName);
    return student ? student.phoneNumber : 'N/A';
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

      <Role/>

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
      </div>

      <CalendarPicker
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      />

      <button className="add-button" onClick={handleBooking}>
        Add Date and Time to List
      </button>

      <div className="bookings">
        <h2>Current Slots for {selectedCoach}</h2>
        <table>
          <thead>
            <tr>
              <th>Coach</th>
              <th>Student</th>
              <th>Date and Time</th>
              <th>Booked</th>
              <th>Student's Phone Number</th>
            </tr>
          </thead>
          <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
                <td>{booking.Coach}</td>
                <td>{booking.Student}</td>
                <td>{booking.DateTime}</td>
                <td>{booking.Booked ? 'Yes' : 'No'}</td>
                <td>{booking.Student !== null ? getStudentPhoneNumber(booking.Student) : ''}</td>
            </tr>
          ))}
          </tbody>
        </table>

        <h2>Upcoming bookings for {selectedCoach}</h2>
        <table>
          <thead>
            <tr>
              <th>Coach</th>
              <th>Student</th>
              <th>Date</th>
              <th>Booked</th>
              <th>Student's Phone Number</th>
            </tr>
          </thead>
          <tbody>
          {filteredAndSortedBookings.map((booking, index) => (
            <tr key={index}>
                <td>{booking.Coach}</td>
                <td>{booking.Student}</td>
                <td>{booking.DateTime}</td>
                <td>{booking.Booked ? 'Yes' : 'No'}</td>
                <td>{booking.Student !== null ? getStudentPhoneNumber(booking.Student) : ''}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <LeaveReview pastBookings={pastBookings}/>
        <h2>Reviews</h2>
        <table>
        <thead>
          <tr>
            <th>Coach</th>
            <th>Student</th>
            <th>Date and Time</th>
            <th>Satisfaction</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, index) => (
            <tr key={index}>
              <td>{review.Coach}</td>
              <td>{review.Student}</td>
              <td>{review.DateTime}</td>
              <td>{review.Satisfaction}</td>
              <td>{review.Notes}</td>
            </tr>
          ))}
  </tbody>
</table>

      </div>
    </div>
  );
}


export default CoachPage;