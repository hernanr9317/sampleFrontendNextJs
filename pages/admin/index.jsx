// import {useEffect} from 'react';
import {AdminLayout} from '../../components/layouts';
import {AddCategory} from './../../components/Admin/AddCaregory';
// import {useRouter} from 'next/router';
// import Cookies from 'js-cookie';
// import {getDataAxios} from './../../utils/axiosConfig';

const AdminScreen = () => {
  // const router = useRouter();
  // const tokenCookie = Cookies.get('token');

  // const checkTokenAuth = async () => {
  //   const resp = await getDataAxios('/auth/validate-token/', tokenCookie);
  //   return resp;
  // };

  // useEffect(() => {
  //   console.log(
  //     checkTokenAuth().then((resp) => {
  //       if (!resp) router.replace('/');
  //     }),
  //   );
  // }, []);

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
