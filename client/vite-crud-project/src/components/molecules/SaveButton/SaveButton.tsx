import Button from '../../atoms/Button';

const SaveButton = () => {
  return (
    <>
      <Button
        styletype='save'
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
        children={'Išsaugoti'}
      />
    </>
  );
};

export default SaveButton;
