import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../components/organism/Table';
import Footer from '../../components/templates/Footer';
import Header from '../../components/templates/Header';
import { IUser } from '../../shared/api/types';

const Home = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    filterUsers();
  }, [users, searchValue]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/crud');
      const fetchedUsers: IUser[] = response.data;
      setUsers(fetchedUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const filterUsers = () => {
    const filteredData = users.filter((user: IUser) => {
      const searchLower = searchValue.toLowerCase();
      const nameMatch = user.name.toLowerCase().includes(searchLower);
      const surnameMatch = user.surname.toLowerCase().includes(searchLower);
      const emailMatch = user.email.toLowerCase().includes(searchLower);
      const ageMatch = user.age.toString().includes(searchValue);

      return nameMatch || surnameMatch || emailMatch || ageMatch;
    });

    setFilteredUsers(filteredData);
  };

  const addUser = (user: IUser) => {
    setUsers((prevUsers) => {
      const userExists = prevUsers.some(
        (existingUser) => existingUser._id === user._id
      );

      if (!userExists) {
        const updatedUsers = [...prevUsers, user];
        return updatedUsers;
      }

      return prevUsers;
    });
  };

  return (
    <div>
      <Header
        users={users}
        setFilteredUsers={setFilteredUsers}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        userAdded={addUser}
      />
      <Table users={filteredUsers} />
      <Footer />
    </div>
  );
};

export default Home;
