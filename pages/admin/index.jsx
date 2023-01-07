import {AdminLayout} from '../../components/layouts';
import {AddCategory} from './../../components/Admin/AddCaregory';

const AdminScreen = () => {
  return (
    <AdminLayout
      title={'e-seguridad - Admin'}
      pageDescription={'Admin dashboard'}
    >
      <div>Admin</div>
      <div className="mt-5">
        <AddCategory />
      </div>
    </AdminLayout>
  );
};

export default AdminScreen;
