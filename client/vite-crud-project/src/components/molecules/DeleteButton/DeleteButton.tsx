import Button from '../../atoms/Button';

const DeleteButton = () => {
  return (
    <>
      <Button
        styletype='delete'
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
        children={'Ištrinti'}
      />
    </>
  );
};

export default DeleteButton;
