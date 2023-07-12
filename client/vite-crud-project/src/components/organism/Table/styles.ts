import styled from 'styled-components';

export const StyledTableDiv = styled.div`
  background-color: ${(props) => props.theme.palette.shades.whiteTer};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  max-width: 1114px;
  padding: 30px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const StyledNamesDiv = styled.div`
  display: flex;
  font-weight: 500;
  justify-content: left;
  gap: 100px;

  @media (max-width: 768px) {
    gap: 50px; /* Adjust the gap for smaller screens */
  }
`;
