import Input from '../../components/atoms/Input';
import Modal from '../../components/atoms/Modal';
import AddButton from '../../components/molecules/AddButton';
import ChangeButton from '../../components/molecules/ChangeButton';
import DeleteButton from '../../components/molecules/DeleteButton';
import SaveButton from '../../components/molecules/SaveButton';
import TableRow from '../../components/molecules/TableRow';
import Table from '../../components/organism/Table';
import Footer from '../../components/templates/Footer';
import Header from '../../components/templates/Header';
import { API } from '../../shared/api';

const Home = () => {
  return (
    <div>
      <Header />
      <Table />

      <Footer />
    </div>
  );
};

export default Home;
