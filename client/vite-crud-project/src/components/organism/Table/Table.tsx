import React, { useEffect, useState } from 'react';
import TableRow from '../../molecules/TableRow';
import { StyledNamesDiv, StyledTableDiv } from './styles';
import axios from 'axios';
import { IUser } from '../../../shared/api/types';

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [data, setData] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshFlag, setRefreshFlag] = useState(true); // Add refreshFlag state

  const itemsPerPage = 10;

  useEffect(() => {
    fetchData();
  }, [currentPage, refreshFlag]); // Add refreshFlag to the dependency array

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:5000/api/crud?page=${currentPage}&limit=${itemsPerPage}`
      );

      const responseData = response.data;

      setData(responseData.items);
      setTotalPages(responseData.totalPages);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const generatePagination = () => {
    return Array(Math.ceil(Response.length / itemsPerPage))
      .fill(0)
      .map((_, i) => i + 1)
      .filter((x, _, arr) => {
        if (x === 1) {
          return x;
        } else if (x === currentPage) {
          return x;
        } else if (
          x - 1 === currentPage ||
          x - 2 === currentPage ||
          x + 1 === currentPage ||
          x + 2 === currentPage
        ) {
          return x;
        } else if (x === arr.length) {
          return x;
        }
      })
      .map((x) => (
        <button
          key={x}
          onClick={() => setCurrentPage(x)}
          className={currentPage === x ? 'selected' : ''}
        >
          {x}
        </button>
      ));
  };

  const addNewUser = async (user: IUser) => {
    try {
      await axios.post('http://localhost:5000/api/crud', user);
      setRefreshFlag(!refreshFlag);
    } catch (error) {
      console.error('Error adding new user:', error);
    }
  };

  return (
    <div>
      <StyledTableDiv>
        <StyledNamesDiv>
          <p>Vardas</p>
          <p>Pavardė</p>
          <p>El.Paštas</p>
          <p>Amžius</p>
        </StyledNamesDiv>
        <TableRow />
      </StyledTableDiv>

      <div>{generatePagination()}</div>
    </div>
  );
};

export default Table;
