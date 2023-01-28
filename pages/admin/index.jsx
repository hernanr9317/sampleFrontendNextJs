import {CategoryFilter} from '../../components/Admin/CategoryFilter';
import {AdminLayout} from '../../components/layouts';

const AdminScreen = () => {
  return (
    <AdminLayout
      title={'e-seguridad - Admin'}
      pageDescription={'Admin dashboard'}
    >
      <div>Admin</div>
      <div className="mt-5 container">
        <CategoryFilter />
      </div>
    </AdminLayout>
  );
};

export default AdminScreen;
