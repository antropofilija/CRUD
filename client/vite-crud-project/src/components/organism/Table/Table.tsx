import React, { useState, useEffect } from 'react';
import TableRow from '../../molecules/TableRow';
import { StyledNamesDiv, StyledRow, StyledTableDiv } from './styles';
import { IUser } from '../../../shared/api/types';

interface TableProps {
  users: IUser[];
}

const Table: React.FC<TableProps> = ({ users }) => {
  const [updatedUsers, setUpdatedUsers] = useState<IUser[]>(users);

  const handleUpdateUser = (updatedUser: IUser) => {
    setUpdatedUsers((prevUsers) => {
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
    const filteredUsers = updatedUsers.filter((user) => user._id !== userId);
    setUpdatedUsers(filteredUsers);
  };

  useEffect(() => {
    setUpdatedUsers(users);
  }, [users]);

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
          users={updatedUsers}
          onDeleteUser={handleDeleteUser}
          onUpdateUser={handleUpdateUser} // Pass the function here
        />
      </StyledTableDiv>
    </div>
  );
};

export default Table;
