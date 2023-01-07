import {CategoryFilter} from '../../components/Admin/CategoryFilter';
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
        {/* <AddCategory /> */}
        <CategoryFilter />
      </div>
    </AdminLayout>
  );
};

export default AdminScreen;
