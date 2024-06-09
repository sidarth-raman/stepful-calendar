// // pages/index.js
// import { useState, useEffect } from 'react';

// export default function Home() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('/api/api')
//       .then(res => res.json())
//       .then(data => setUsers(data))
//       .catch(err => console.error('Error fetching users:', err));
//   }, []);

//   const addUser = async () => {
//     const name = prompt("Enter name:");
//     const email = prompt("Enter email:");
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ name, email })
//     });

//     if (response.ok) {
//       const newUser = await response.json();
//       setUsers([...users, newUser]);
//     }
//   };

//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // pages/index.js
// import React, { useState } from 'react';
// import Calendar from '../components/Calendar';
// import { v4 as uuidv4 } from 'uuid';
// import 'react-datepicker/dist/react-datepicker.css';

// const HomePage = () => {
//   const [events, setEvents] = useState([]);

//   const handleDateClick = (info) => {
//     const start = info.start;
//     const end = new Date(info.start);
//     end.setHours(end.getHours() + 2); // Add 2 hours to start time

//     const newEvent = {
//       id: uuidv4(),
//       title: 'Available Slot',
//       start,
//       end,
//     };

//     setEvents([...events, newEvent]);
//   };

//   return (
//     <div>
//       <h1>Coach Availability Calendar</h1>
//       <Calendar events={events} handleDateClick={handleDateClick} />
//     </div>
//   );
// };
