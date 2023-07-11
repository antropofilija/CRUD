import Input from '../../components/atoms/Input';
import AddButton from '../../components/molecules/AddButton';
import ChangeButton from '../../components/molecules/ChangeButton';
import DeleteButton from '../../components/molecules/DeleteButton';
import SaveButton from '../../components/molecules/SaveButton';
import TableRow from '../../components/molecules/TableRow';
import Footer from '../../components/templates/Footer';
import Header from '../../components/templates/Header';
import { API } from '../../shared/api';

const Home = () => {
  // async function fetchUsers() {
  //   try {
  //     const users = await API.getUsers();
  //     console.log('Users:', users);
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //   }
  // }

  // fetchUsers();

  return (
    <div>
      <Header />
      <TableRow />
      <Footer />
    </div>
  );
};

export default Home;
