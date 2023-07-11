import { StyledButton } from './styles';

interface IButtonProps {
  onClick: () => void;
  children: string;
  styletype: 'add' | 'delete' | 'change' | 'save';
}

const Button = ({ onClick, children, styletype }: IButtonProps) => {
  return (
    <StyledButton styletype={styletype} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
