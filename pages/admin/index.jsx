import {CategoryFilter} from '../../components/Admin/CategoryFilter';
import withAuth from '../../components/AuthValidator';
import {AdminLayout} from '../../components/layouts';
import {AdminHeader} from './../../components/Admin/AdminHeader';

const AdminScreen = () => {
  return (
    <AdminLayout
      title={'e-seguridad - Admin'}
      pageDescription={'Admin dashboard'}
    >
      <div>Admin</div>
      <div className="mt-5 container">
        <AdminHeader />
        <CategoryFilter />
      </div>
    </AdminLayout>
  );
};

export default withAuth(AdminScreen);
