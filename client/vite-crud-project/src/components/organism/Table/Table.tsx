import React, { useState, useEffect } from 'react';
import TableRow from '../../molecules/TableRow';
import { StyledNamesDiv, StyledRow, StyledTableDiv } from './styles';
import { IUser } from '../../../shared/api/types';

interface TableProps {
  users: IUser[];
}

const Table: React.FC<TableProps> = ({ users }) => {
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleUpdateUser = (updatedUser: IUser) => {
    setFilteredUsers((prevUsers) => {
      const index = prevUsers.findIndex((user) => user._id === updatedUser._id);
      if (index !== -1) {
        const updatedUsers = [...prevUsers];
        updatedUsers[index] = updatedUser;
        return updatedUsers;
      }
      return prevUsers;
    });
  };

  const handleDeleteUser = (userId: string) => {
    const updatedUsers = filteredUsers.filter((user) => user._id !== userId);
    setFilteredUsers(updatedUsers);
  };

  return (
    <div>
      <StyledTableDiv>
        <StyledNamesDiv>
          <StyledRow>Vardas</StyledRow>
          <StyledRow>Pavardė</StyledRow>
          <StyledRow>El.Paštas</StyledRow>
          <StyledRow>Amžius</StyledRow>
        </StyledNamesDiv>
        <TableRow
          users={filteredUsers}
          onDeleteUser={handleDeleteUser}
          onUpdateUser={handleUpdateUser}
        />
      </StyledTableDiv>
    </div>
  );
};

export default Table;
