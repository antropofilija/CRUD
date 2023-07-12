import { styled } from 'styled-components';

export const StyledInputWrapper = styled.div`
  width: 95%;
  border-radius: 0.375em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  border: 1px solid transparent;
  border-color: ${(props) => props.theme.palette.shades.greyLight};
  background-color: ${(props) => props.theme.palette.white};
  height: 2.5em;

  max-width: 1200px;
`;

export const StyledIcon = styled.span`
  opacity: 1;
  height: 14px;
  width: 14px;
  padding-left: 15px;
`;
export const StyledInput = styled.input`
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.palette.white};
  border-radius: 0.375em;
  background-color: ${(props) => props.theme.palette.white};
  width: 100%;
  color: #676c7e;
  padding: 0 13px;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 300;

  &::placeholder {
    color: #9b9eac;
  }
`;
