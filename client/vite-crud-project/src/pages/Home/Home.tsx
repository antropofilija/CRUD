import React, { useState, useEffect } from 'react';
import Table from '../../components/organism/Table';
import Footer from '../../components/templates/Footer';
import Header from '../../components/templates/Header';
import { IUser } from '../../shared/api/types';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchUsers();
  }, [searchValue]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/crud');
      const allUsers = response.data;

      // Filter users based on search value
      const filteredData = allUsers.filter((user: IUser) => {
        const searchLower = searchValue.toLowerCase();
        const nameMatch = user.name.toLowerCase().includes(searchLower);
        const surnameMatch = user.surname.toLowerCase().includes(searchLower);
        const emailMatch = user.email.toLowerCase().includes(searchLower);
        const ageMatch = user.age.toString().includes(searchValue);

        return nameMatch || surnameMatch || emailMatch || ageMatch;
      });

      setUsers(allUsers);
      setFilteredUsers(filteredData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <Header
        users={users}
        setFilteredUsers={setFilteredUsers}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Table users={filteredUsers} />
      <Footer />
    </div>
  );
};

export default Home;
