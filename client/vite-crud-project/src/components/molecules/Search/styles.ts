import { styled } from 'styled-components';

export const StyledInput = styled.input`
  /* outline: none; */
  border: 1px solid ${(props) => props.theme.palette.shades.greyLight};
  border-radius: 0.375em;

  width: 100%;
  color: #676c7e;
  padding: 0 0.813rem;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 300;

  &::placeholder {
    color: #9b9eac;
  }
`;
