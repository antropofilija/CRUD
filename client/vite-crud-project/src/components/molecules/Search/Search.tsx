import React from 'react';
import { StyledInput } from './styles';

interface SearchProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  onSearch: () => void;
}

const Search: React.FC<SearchProps> = ({
  searchValue,
  setSearchValue,
  onSearch,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <StyledInput
      type='text'
      value={searchValue}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      placeholder='Search...'
    />
  );
};

export default Search;
