import {AdminLayout} from './../../components/layouts/AdminLayout';
import {MainProfile} from '../../components/Admin/MainProfile/index';

const Profile = () => {
  return (
    <AdminLayout
      title={'e-seguridad - Admin'}
      pageDescription={'Admin dashboard'}
    >
      <div>Admin</div>
      <div className="mt-5 container">
        <MainProfile />
      </div>
    </AdminLayout>
  );
};

export default Profile;
