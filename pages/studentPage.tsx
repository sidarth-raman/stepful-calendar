import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const StudentPage: React.FC = () => {
    const [role, setRole] = useState<string>('');
    const [selectedCoach, setSelectedCoach] = useState<string>('');
    const [coaches, setCoaches] = useState([]);
    const router = useRouter();


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
      <h1>Coach Page</h1>
      <label htmlFor="coach-select">Select which coach you want to book with:</label>
      <select
        id="coach-select"
        value={selectedCoach}
        onChange={handleCoachChange}
        style={{ marginLeft: '10px', padding: '5px' }}
      >
        <option value="">--Select a Coach--</option>
        {coaches.map((coach) => (
          <option key={coach.id}>
            {coach.name}
          </option>
        ))}
      </select>
      {selectedCoach && <p>Selected Coach: {selectedCoach}</p>}
    </div>
      </div>
    );
};

export default StudentPage;