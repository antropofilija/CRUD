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
  padding: 30px;
  max-width: 1114px;

  @media screen and (max-width: 500px) {
    margin-top: 20px;
    padding: 10px;
    overflow: auto;
    margin: 10px;
  }

  @media screen and (min-width: 501px) and (max-width: 768px) {
    margin-top: 30px;
    padding: 20px;
    overflow: auto;
    margin: 10px;
  }

  @media screen and (min-width: 769px) and (max-width: 920px) {
    margin-top: 40px;
    padding: 25px;
    overflow: auto;
  }

  @media screen and (min-width: 921px) {
    margin-top: 50px;
  }
`;

export const StyledNamesDiv = styled.div`
  display: flex;
  font-weight: 500;
  justify-content: left;
  gap: 20px;
  @media screen and (max-width: 500px) {
    gap: 10px;
  }
`;

export const StyledRow = styled.p`
  width: 180px;

  @media screen and (max-width: 500px) {
    width: 120px;
    font-size: 12px;
  }
`;
