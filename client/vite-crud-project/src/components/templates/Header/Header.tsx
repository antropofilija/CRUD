import React from 'react';
import Input from '../../atoms/Input';
import HeaderButton from '../../molecules/HeaderButton';
import Search from '../../molecules/Search';
import { StyledAddButton, StyledWrapper } from './styles';
import { IUser } from '../../../shared/api/types';

interface HeaderProps {
  users: IUser[];
  setFilteredUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  userAdded: (user: IUser) => void;
}

const Header: React.FC<HeaderProps> = ({
  users,
  setFilteredUsers,
  searchValue,
  setSearchValue,
  userAdded,
}) => {
  const handleSearch = () => {
    const filteredData = users.filter((user) => {
      const searchLower = searchValue.toLowerCase();
      const nameMatch = user.name.toLowerCase().includes(searchLower);
      const surnameMatch = user.surname.toLowerCase().includes(searchLower);
      const emailMatch = user.email.toLowerCase().includes(searchLower);
      const ageMatch = user.age.toString().includes(searchValue);

      return nameMatch || surnameMatch || emailMatch || ageMatch;
    });

    setFilteredUsers(filteredData);
  };

  return (
    <StyledWrapper>
      <StyledAddButton>
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSearch={handleSearch}
        />
        <HeaderButton userAdded={userAdded} />
      </StyledAddButton>
    </StyledWrapper>
  );
};

export default Header;
