import { useAuth } from 'hooks/useAuth';

import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import LoggedNav from 'components/LogBar/LogBar';
// ------------------------------------------------------
import { HeaderStyle } from './Header.module';


const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderStyle>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <LoggedNav />}
    </HeaderStyle>
  );
};

export default Header;
