import Button from '../../atoms/Button';

const ChangeButton = () => {
  return (
    <>
      <Button
        styletype='change'
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
        children={'Redaguoti'}
      />
    </>
  );
};

export default ChangeButton;
