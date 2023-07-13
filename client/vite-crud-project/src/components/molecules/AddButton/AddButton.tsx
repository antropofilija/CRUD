import Button from '../../atoms/Button';
import axios from 'axios';
import { FormValue } from '../Form/Form';

interface IAddButtonProps {
  formValue: FormValue;
  onSubmit: () => Promise<void>;
}

const AddButton = ({ formValue, onSubmit }: IAddButtonProps) => {
  const sendDataToDatabase = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/crud',
        formValue
      );
      console.log('Data sent to the database:', response.data);
      await onSubmit();
    } catch (error) {
      console.error('Error sending data to the database:', error);
    }
  };

  const handleButtonClick = async () => {
    await sendDataToDatabase();
  };

  return (
    <Button styletype='add' onClick={handleButtonClick}>
      Pridėti naują
    </Button>
  );
};

export default AddButton;
