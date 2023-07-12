import React, { useEffect, useState } from 'react';
import TableRow from '../../molecules/TableRow';
import { StyledNamesDiv, StyledTableDiv } from './styles';
import axios from 'axios';
import { IUser } from '../../../shared/api/types';

const Table = () => {
  const [data, setData] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 10;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/api/crud`);

      const responseData = response.data;

      setData(responseData.items);

      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
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
    </div>
  );
};

export default Table;
