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
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [editedName, setEditedName] = useState('');
  const [editedSurname, setEditedSurname] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedAge, setEditedAge] = useState('');

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

  const handleCancelDelete = () => {
    setDeletingUserId(null);
  };

  const handleEdit = (userId: string) => {
    const user = users.find((user) => user._id === userId);
    if (user) {
      setEditingUserId(userId);
      setEditedName(user.name);
      setEditedSurname(user.surname);
      setEditedEmail(user.email);
      setEditedAge(user.age.toString());
    }
  };

  const handleSave = async () => {
    try {
      if (editingUserId) {
        const editedUser = {
          name: editedName,
          surname: editedSurname,
          email: editedEmail,
          age: parseInt(editedAge),
        };
        await axios.put(
          `http://localhost:5000/api/crud/${editingUserId}`,
          editedUser
        );
        await fetchUsers();
        setEditingUserId(null);
        setEditedName('');
        setEditedSurname('');
        setEditedEmail('');
        setEditedAge('');
      }
    } catch (error) {
      console.error(`Error editing user with ID ${editingUserId}:`, error);
    }
  };

  const handleCancelEdit = () => {
    setEditingUserId(null);
    setEditedName('');
    setEditedSurname('');
    setEditedEmail('');
    setEditedAge('');
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <StyledLi key={user._id}>
            {editingUserId === user._id ? (
              <div>
                <input
                  type='text'
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <input
                  type='text'
                  value={editedSurname}
                  onChange={(e) => setEditedSurname(e.target.value)}
                />
                <input
                  type='email'
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                />
                <input
                  type='number'
                  value={editedAge}
                  onChange={(e) => setEditedAge(e.target.value)}
                />
                <StyledConfirm>
                  <Button onClick={handleSave} styletype='add'>
                    Išsaugoti
                  </Button>
                  <Button onClick={handleCancelEdit} styletype='delete'>
                    Atšaukti
                  </Button>
                </StyledConfirm>
              </div>
            ) : (
              <div>
                <p>{user.name}</p>
                <p>{user.surname}</p>
                <p>{user.email}</p>
                <p>{user.age}</p>
                {deletingUserId === user._id ? (
                  <StyledConfirm>
                    <p>Ar tikrai norite ištrinti?</p>
                    <Button onClick={handleConfirmDelete} styletype='add'>
                      Taip
                    </Button>
                    <Button onClick={handleCancelDelete} styletype='delete'>
                      Atšaukti
                    </Button>
                  </StyledConfirm>
                ) : (
                  <StyledConfirm>
                    <Button
                      onClick={() => handleEdit(user._id)}
                      styletype='add'
                    >
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
              </div>
            )}
          </StyledLi>
        ))}
      </ul>
    </div>
  );
};

export default TableRow;
