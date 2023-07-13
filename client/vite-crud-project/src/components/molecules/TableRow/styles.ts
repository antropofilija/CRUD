import styled from 'styled-components';

export const StyledConfirm = styled.div`
  display: flex;
  gap: 1.25rem;

  @media screen and (max-width: 768px) {
    gap: 0.625rem;
  }
`;

export const StyledLi = styled.li`
  background-color: ${(props) => props.theme.palette.shades.whiteTer};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-top: 0.5px solid ${(props) => props.theme.palette.shades.greyLighter};
  margin-top: 6px;
`;

export const StyledTableRow = styled.div`
  display: flex;
  justify-content: left;
  padding-top: 0.938rem;
  gap: 1.25rem;

  @media screen and (max-width: 768px) {
    gap: 0.625rem;
  }
`;

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.625rem;
  margin-top: 1.25rem;

  @media screen and (max-width: 500px) {
    justify-content: left;
  }
`;

export const StyledRows = styled.div`
  width: 180px;

  @media screen and (max-width: 768px) {
    width: 120px;
    font-size: 1rem;
  }

  @media screen and (max-width: 500px) {
    width: 180px;
    font-size: 1rem;
  }

  @media screen and (min-width: 501px) and (max-width: 768px) {
    font-size: 1rem;
    width: 190px;
  }

  @media screen and (min-width: 769px) and (max-width: 920px) {
  }

  @media screen and (min-width: 921px) {
  }
`;
