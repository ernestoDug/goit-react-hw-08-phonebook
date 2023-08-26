import { useAuth } from 'hooks/useAuth';
import Navigation from 'components/NavBar/NavBar';
import UserMenu from 'components/UserMenu/UserMenu';
import LoggedNav from 'components/LogBar/LogBar';
import { HeaderStyle } from './Header.module';

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderStyle>
      <Navigation />
      {/* залогенівся тоді тобі туди */}
      {isLoggedIn ? <UserMenu /> : <LoggedNav />}
    </HeaderStyle>
  );
};

export default Header;
