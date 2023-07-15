import React, { useState } from 'react';
import Button from '../../atoms/Button';
import Modal from '../../atoms/Modal';
import Form from '../Form';
import { IUser } from '../../../shared/api/types';

interface IHeaderButton {
  userAdded: (user: IUser) => void;
}

const HeaderButton = ({ userAdded }: IHeaderButton) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsFormSubmitted(false);
  };

  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
  };

  return (
    <>
      <Button
        styletype='add'
        onClick={handleButtonClick}
        children={'Pridėti naują'}
      />
      {isModalOpen && !isFormSubmitted && (
        <Modal onClose={handleCloseModal} isOpen={isModalOpen}>
          <Form onSubmitSuccess={handleFormSubmit} userAdded={userAdded} />
        </Modal>
      )}
      {isFormSubmitted && (
        <Modal onClose={handleCloseModal} isOpen={true}>
          Vartotojas pridėtas sėkmingai
        </Modal>
      )}
    </>
  );
};

export default HeaderButton;
