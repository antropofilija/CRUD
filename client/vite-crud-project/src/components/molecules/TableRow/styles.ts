import styled from 'styled-components';

export const StyledWrapper = styled.div``;

export const StyledConfirm = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const StyledLi = styled.li`
  background-color: ${(props) => props.theme.palette.shades.whiteTer};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StyledTableRow = styled.div`
  display: flex;
  justify-content: left;
  padding-top: 15px;
  gap: 100px;

  @media (max-width: 768px) {
    gap: 50px;
  }
`;

export const StyledPagination = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledRows = styled.div`
  width: 100px;
`;
