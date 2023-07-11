import Button from '../../atoms/Button';

const AddButton = () => {
  return (
    <>
      <Button
        styletype='add'
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
        children={'Pridėti naują'}
      />
    </>
  );
};

export default AddButton;
