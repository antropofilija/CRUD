import { styled } from 'styled-components';

interface IStyledButtonProps {
  styletype?: 'add' | 'delete' | 'change' | 'save';
}

export const StyledButton = styled.button<IStyledButtonProps>`
  background-color: transparent;
  border: solid 0.0625rem;
  color: ${(props) =>
    props.styletype === 'delete'
      ? props.theme.palette.danger.main
      : props.styletype === 'save'
      ? props.theme.palette.success.main
      : props.styletype === 'change'
      ? props.theme.palette.info.main
      : props.styletype === 'add'
      ? props.theme.palette.accent
      : props.theme.palette.primary.main};
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) =>
      props.styletype === 'delete'
        ? props.theme.palette.danger.light
        : props.styletype === 'save'
        ? props.theme.palette.success.light
        : props.styletype === 'change'
        ? props.theme.palette.info.light
        : props.styletype === 'add'
        ? props.theme.palette.link.light
        : props.theme.palette.primary.light};
  }

  &:focus {
    outline: none;
  }
`;
