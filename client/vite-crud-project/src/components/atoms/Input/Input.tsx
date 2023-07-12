import React from 'react';
import { StyledInput, StyledInputWrapper } from './styles';

interface IInputProps {
  type: 'text' | 'number' | 'email';
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  labelText?: string;
}

const Input = ({
  type,
  value,
  setValue,
  placeholder,
  labelText,
}: IInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      {labelText && <label className='label'>{labelText}</label>}
      <StyledInputWrapper>
        <StyledInput
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder ? placeholder : ''}
        />
      </StyledInputWrapper>
    </div>
  );
};

export default Input;
