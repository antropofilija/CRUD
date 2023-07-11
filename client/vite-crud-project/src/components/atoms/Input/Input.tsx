import { useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';
import { StyledInputWrapper, StyledIcon, StyledInput } from './styles';

interface IInputProps {
  type: 'text' | 'number';
  value: string | number;
  setvalue: (value: string | number) => void;
  icon?: string;
  placeholder?: string;
  color?: string;
  onChange: (value: string) => void;
}

const Input = ({
  type,
  value,
  setvalue,
  icon,
  placeholder,
  color,
}: IInputProps) => {
  const theme = useTheme();

  const inputWrapperRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleOutsideInputClick = (e: any) => {
      if (
        inputWrapperRef.current &&
        !inputWrapperRef.current?.contains(e.target)
      ) {
        inputWrapperRef.current.style.boxShadow = 'none';
        inputWrapperRef.current.style.borderColor =
          theme.palette.shades.greyLight;
        if (iconRef.current) {
          iconRef.current.style.color = theme.palette.shades.greyLight;
        }
      }
    };

    document.addEventListener('click', handleOutsideInputClick);

    return () => {
      document.removeEventListener('click', handleOutsideInputClick);
    };
  }, [theme.palette.shades.greyLight]);

  const handleClick = () => {
    if (inputWrapperRef.current) {
      inputWrapperRef.current.style.boxShadow = `0px 0px 2px 0.5px ${
        color ? theme.palette[color].light : theme.palette.primary.main
      }`;

      inputWrapperRef.current.style.borderColor = color
        ? theme.palette[color].light
        : theme.palette.primary.main;
      if (inputRef.current) {
        inputRef.current.focus();
      }
      if (iconRef.current) {
        iconRef.current.style.color = theme.palette.primary.main;
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Check if the input value is a valid number or an empty string
    if (!isNaN(Number(inputValue)) || inputValue === '') {
      // Check if the input value is greater than or equal to 0
      if (Number(inputValue) >= 0) {
        setvalue(inputValue);
      } else {
        setvalue('');
      }
    }
  };

  return (
    <StyledInputWrapper ref={inputWrapperRef} onClick={handleClick}>
      <StyledIcon ref={iconRef}>{icon && icon}</StyledIcon>
      <StyledInput
        ref={inputRef}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder ? placeholder : ''}
      />
    </StyledInputWrapper>
  );
};

export default Input;
