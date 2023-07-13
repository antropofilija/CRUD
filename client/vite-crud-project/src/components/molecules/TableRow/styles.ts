import styled from 'styled-components';

export const StyledConfirm = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 768px) {
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
  gap: 20px;

  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;

export const StyledPagination = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledRows = styled.div`
  width: 180px;

  @media screen and (max-width: 768px) {
    width: 120px;
    font-size: 12px;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }

  @media screen and (min-width: 501px) and (max-width: 768px) {
    font-size: 14px;
    width: 190px;
  }

  @media screen and (min-width: 769px) and (max-width: 920px) {
  }

  @media screen and (min-width: 921px) {
  }
`;
