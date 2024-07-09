import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className='container'>
        <div className='contentbox'>
          <h3>Users</h3>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <Link to={`/users/${user.id}/posts`}>{user.name}</Link>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default User;