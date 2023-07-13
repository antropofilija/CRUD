import React, { useState } from 'react';
import Input from '../../atoms/Input';
import AddButton from '../AddButton';

import { StyledForm } from './styles';

export type FormValue = {
  name: string;
  surname: string;
  email: string;
  age: number;
};

type FormProps = {
  onSubmitSuccess: () => void;
};

const Form: React.FC<FormProps> = ({ onSubmitSuccess }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleFormSubmit = async () => {
    const formValue: FormValue = {
      name,
      surname,
      email,
      age: parseInt(age),
    };

    setName('');
    setSurname('');
    setEmail('');
    setAge('');

    onSubmitSuccess();
    window.location.reload();
  };

  return (
    <StyledForm>
      <Input
        type='text'
        value={name}
        placeholder='Vardenis'
        labelText='Vardas'
        setValue={setName}
      />
      <Input
        type='text'
        value={surname}
        placeholder='Pavardenis'
        labelText='Pavardė'
        setValue={setSurname}
      />

      <Input
        type='email'
        value={email}
        placeholder='Pavardenis@gmail.com'
        labelText='El.paštas'
        setValue={setEmail}
      />
      <Input
        type='number'
        value={age}
        placeholder='24'
        labelText='Amžius'
        setValue={setAge}
      />

      <div>
        <AddButton
          formValue={{ name, surname, email, age: parseInt(age) }}
          onSubmit={handleFormSubmit}
        />
      </div>
    </StyledForm>
  );
};

export default Form;
