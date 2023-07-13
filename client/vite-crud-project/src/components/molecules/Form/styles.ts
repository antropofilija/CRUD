import { styled } from 'styled-components';

export const StyledForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 1.25rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledFormColumns = styled.div`
  margin-top: 0.938rem;
`;
