import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyledLi } from './styles';

interface IUser {
  _id: string;
  name: string;
  surname: string;
  email: string;
  age: number;
}

const TableRow = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/crud');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <StyledLi key={user._id}>
            <p>{user.name}</p>
            <p> {user.surname}</p>
            <p>{user.email}</p>
            <p>{user.age}</p>
          </StyledLi>
        ))}
      </ul>
    </div>
  );
};

export default TableRow;
