import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../../atoms/Button';
import {
  StyledLi,
  StyledConfirm,
  StyledTableRow,
  StyledPagination,
} from './styles';
import Input from '../../atoms/Input';
import Modal from '../../atoms/Modal';
import { IUser } from '../../../shared/api/types';

const TableRow = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [deletingUserId, setDeletingUserId] = useState<string | null>(null);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [editedName, setEditedName] = useState('');
  const [editedSurname, setEditedSurname] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedAge, setEditedAge] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 10;
  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/crud');
      setUsers(response.data);
      setTotalPages(Math.ceil(response.data.length / itemsPerPage));
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
        setShowModal(true);
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

  const closeModal = () => {
    setShowModal(false);
  };

  const generatePagination = () => {
    const visiblePages = Array(totalPages)
      .fill(0)
      .map((_, i) => i + 1)
      .filter((x, _, arr) => {
        if (x === 1) {
          return true;
        } else if (x === currentPage) {
          return true;
        } else if (
          x - 1 === currentPage ||
          x - 2 === currentPage ||
          x + 1 === currentPage ||
          x + 2 === currentPage
        ) {
          return true;
        } else if (x === arr.length) {
          return true;
        }
        return false;
      });

    if (visiblePages.length > 10) {
      const startIndex = Math.max(0, currentPage - 5);
      const endIndex = Math.min(startIndex + 10, visiblePages.length);
      return visiblePages.slice(startIndex, endIndex).map((x) => (
        <Button
          key={x}
          onClick={() => setCurrentPage(x)}
          styletype={currentPage === x ? 'add selected' : 'save'}
        >
          {String(x)}
        </Button>
      ));
    } else {
      return visiblePages.map((x) => (
        <Button
          key={x}
          onClick={() => setCurrentPage(x)}
          styletype={currentPage === x ? 'add selected' : 'save'}
        >
          {String(x)}
        </Button>
      ));
    }
  };

  return (
    <div>
      <ul>
        {users
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((user) => (
            <StyledLi key={user._id}>
              {editingUserId === user._id ? (
                <StyledTableRow>
                  <Input
                    type='text'
                    value={editedName}
                    setValue={setEditedName}
                  />
                  <Input
                    type='text'
                    value={editedSurname}
                    setValue={setEditedSurname}
                  />
                  <Input
                    type='email'
                    value={editedEmail}
                    setValue={setEditedEmail}
                  />
                  <Input
                    type='number'
                    value={editedAge}
                    setValue={setEditedAge}
                  />
                  <StyledConfirm>
                    <Button onClick={handleSave} styletype='add'>
                      Išsaugoti
                    </Button>
                    <Button onClick={handleCancelEdit} styletype='delete'>
                      Atšaukti
                    </Button>
                  </StyledConfirm>
                </StyledTableRow>
              ) : (
                <StyledTableRow>
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
                        <Button onClick={handleCancelDelete} styletype='delete'>
                          Atšaukti
                        </Button>
                      </StyledConfirm>
                    </div>
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
                </StyledTableRow>
              )}
            </StyledLi>
          ))}
      </ul>
      <Modal onClose={closeModal} isOpen={showModal}>
        <p>Vartotojas ištrintas sėkmingai</p>
      </Modal>
      <StyledPagination>{generatePagination()}</StyledPagination>
    </div>
  );
};

export default TableRow;
