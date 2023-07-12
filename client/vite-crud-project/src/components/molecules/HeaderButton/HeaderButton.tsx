import React, { useState } from 'react';
import Button from '../../atoms/Button';
import Modal from '../../atoms/Modal';
import Form from '../Form';

const HeaderButton = () => {
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
          <Form onSubmitSuccess={handleFormSubmit} />
        </Modal>
      )}
      {isFormSubmitted && (
        <Modal onClose={handleCloseModal} isOpen={true}>
          User added successfully
        </Modal>
      )}
    </>
  );
};

export default HeaderButton;
