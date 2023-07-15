import React, { useState } from 'react';
import Input from '../../atoms/Input';
import AddButton from '../AddButton';
import { StyledForm } from './styles';
import { IUser } from '../../../shared/api/types';
import axios from 'axios';

export type FormValue = {
  name: string;
  surname: string;
  email: string;
  age: number;
};

type FormProps = {
  onSubmitSuccess: () => void;
  userAdded: (user: IUser) => void;
};

const Form: React.FC<FormProps> = ({ onSubmitSuccess, userAdded }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async () => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const formValue: FormValue = {
      name,
      surname,
      email,
      age: parseInt(age),
    };

    try {
      const response = await axios.post(
        'http://localhost:5000/api/crud',
        formValue
      );
      const newUser: IUser = response.data;
      userAdded(newUser);
      onSubmitSuccess();
    } catch (error) {
      console.error('Error adding user:', error);
    }

    setIsSubmitting(false);
    setName('');
    setSurname('');
    setEmail('');
    setAge('');
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
