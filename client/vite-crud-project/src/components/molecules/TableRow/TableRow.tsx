import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../../atoms/Button';
import {
  StyledLi,
  StyledConfirm,
  StyledTableRow,
  StyledPagination,
  StyledRows,
} from './styles';
import Input from '../../atoms/Input';
import Modal from '../../atoms/Modal';
import { IUser } from '../../../shared/api/types';

interface TableRowProps {
  users: IUser[];
  onDeleteUser: (userId: string) => void;
  onUpdateUser: (updatedUser: IUser) => void;
}

const TableRow: React.FC<TableRowProps> = ({
  users,
  onDeleteUser,
  onUpdateUser,
}) => {
  const itemsPerPage = 10;
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [deletingUserId, setDeletingUserId] = useState<string | null>(null);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [editedName, setEditedName] = useState('');
  const [editedSurname, setEditedSurname] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedAge, setEditedAge] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setTotalPages(Math.ceil(users.length / itemsPerPage));
  }, [users]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedUsers = users.slice(startIndex, endIndex);
    setFilteredUsers(slicedUsers);
  }, [users, currentPage, itemsPerPage]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/crud');
      const fetchedUsers: IUser[] = response.data;
      setFilteredUsers(
        fetchedUsers.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      );
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
        onDeleteUser(deletingUserId);
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

        // Call onUpdateUser with the updated user
        const updatedUser: IUser | undefined = filteredUsers.find(
          (user) => user._id === editingUserId
        );
        if (updatedUser) {
          onUpdateUser({ ...updatedUser, ...editedUser });
        }
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
    const visiblePages = [];
    const rangeStart = Math.max(1, currentPage - 2);
    const rangeEnd = Math.min(rangeStart + 4, totalPages);

    for (let i = rangeStart; i <= rangeEnd; i++) {
      visiblePages.push(
        <Button
          key={i}
          onClick={() => setCurrentPage(i)}
          styletype={currentPage === i ? 'add' : 'add'}
        >
          {String(i)}
        </Button>
      );
    }

    return visiblePages;
  };

  return (
    <div>
      <div>
        <ul>
          {filteredUsers.map((user) => (
            <StyledLi key={user._id}>
              {editingUserId === user._id ? (
                <StyledTableRow>
                  <StyledRows>
                    <Input
                      type='text'
                      value={editedName}
                      setValue={setEditedName}
                    />
                  </StyledRows>
                  <StyledRows>
                    <Input
                      type='text'
                      value={editedSurname}
                      setValue={setEditedSurname}
                    />
                  </StyledRows>
                  <StyledRows>
                    <Input
                      type='email'
                      value={editedEmail}
                      setValue={setEditedEmail}
                    />
                  </StyledRows>
                  <StyledRows>
                    <Input
                      type='number'
                      value={editedAge}
                      setValue={setEditedAge}
                    />
                  </StyledRows>
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
                  <StyledRows>
                    <p>{user.name}</p>
                  </StyledRows>
                  <StyledRows>
                    <p>{user.surname}</p>
                  </StyledRows>
                  <StyledRows>
                    <p>{user.email}</p>
                  </StyledRows>
                  <StyledRows>
                    <p>{user.age}</p>
                  </StyledRows>
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
    </div>
  );
};

export default TableRow;
