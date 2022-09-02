import {MainFooter} from '../MainFooter';
import {MainNavbar} from '../MainNavbar';

export default function Layout({children}) {
  return (
    <>
      <MainNavbar />
      <main>{children}</main>
      <MainFooter />
    </>
  );
}