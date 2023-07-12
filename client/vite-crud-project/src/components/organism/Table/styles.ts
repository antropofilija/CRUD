import { styled } from 'styled-components';

export const StyledTableDiv = styled.div`
  background-color: ${(props) => props.theme.palette.shades.whiteTer};

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 1114px;
  padding: 30px;
`;

export const StyledNamesDiv = styled.div`
  display: flex;
  font-weight: 500;
  gap: 80px;
`;

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 0.5em 0.75em;
  background-color: red;
`;
