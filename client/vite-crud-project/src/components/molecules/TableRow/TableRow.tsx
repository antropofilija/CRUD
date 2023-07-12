import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../../atoms/Button';
import { StyledLi, StyledConfirm } from './styles';

interface IUser {
  _id: string;
  name: string;
  surname: string;
  email: string;
  age: number;
}

const TableRow = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [deletingUserId, setDeletingUserId] = useState<string | null>(null);

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

  const handleDelete = (userId: string) => {
    setDeletingUserId(userId);
  };

  const handleConfirmDelete = async () => {
    try {
      if (deletingUserId) {
        await axios.delete(`http://localhost:5000/api/crud/${deletingUserId}`);
        await fetchUsers();
      }
      setDeletingUserId(null);
    } catch (error) {
      console.error(`Error deleting user with ID ${deletingUserId}:`, error);
    }
  };

  const handleDismissDelete = () => {
    setDeletingUserId(null);
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <StyledLi key={user._id}>
            <p>{user.name}</p>
            <p>{user.surname}</p>
            <p>{user.email}</p>
            <p>{user.age}</p>
            {deletingUserId === user._id ? (
              <div>
                <p>Ar tikrai norite ištrinti?</p>
                <StyledConfirm>
                  <Button onClick={handleConfirmDelete} styletype='add'>
                    Taip
                  </Button>
                  <Button onClick={handleDismissDelete} styletype='delete'>
                    Atšaukti
                  </Button>
                </StyledConfirm>
              </div>
            ) : (
              <StyledConfirm>
                <Button onClick={() => handleDelete(user._id)} styletype='add'>
                  Redaguoti
                </Button>
                <Button
                  onClick={() => handleDelete(user._id)}
                  styletype='delete'
                >
                  Ištrinti
                </Button>
              </StyledConfirm>
            )}
          </StyledLi>
        ))}
      </ul>
    </div>
  );
};

export default TableRow;
