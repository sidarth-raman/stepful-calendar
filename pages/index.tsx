import React, { useState } from 'react';
import { useRouter } from 'next/router';


const Home: React.FC = () => {
    const [role, setRole] = useState<string>('');
    const router = useRouter();
  
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedRole = event.target.value;
      setRole(selectedRole);
  
      if (selectedRole === 'coach') {
        router.push('/coachPage');
      } else if (selectedRole === 'student') {
        router.push('/studentPage');
      }
    };
  
    return (
      <div>
        <label htmlFor="role">Select your role: </label>
        <select id="role" value={role} onChange={handleChange}>
          <option value="">--Choose a role--</option>
          <option value="coach">Coach</option>
          <option value="student">Student</option>
        </select>
      </div>
    );
  };

export default Home;