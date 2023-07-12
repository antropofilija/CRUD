import { SetStateAction, useState } from 'react';
import Button from '../../atoms/Button';
import Modal from '../../atoms/Modal';
import Form from '../Form';

const HeaderButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        styletype='add'
        onClick={handleButtonClick}
        children={'Pridėti naują'}
      />
      {isModalOpen && (
        <Modal onClose={closeModal} isOpen={isModalOpen}>
          {<Form />}
        </Modal>
      )}
    </>
  );
};

export default HeaderButton;
