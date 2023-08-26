import { useAuth } from 'hooks/useAuth';
import {
  LogoStyle,
  NavContStyle,
  NavLinkStyle,
  BodyStyle,
} from './NavBar.module';

const NavBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <BodyStyle>
      <LogoStyle to="/">☎️</LogoStyle>
      {/* уомва переходу */}
      <NavContStyle>
        {isLoggedIn && (
          <NavLinkStyle to="/contacts">
            {' '}
       Контакти 📑
          </NavLinkStyle>
        )}
      </NavContStyle>
    </BodyStyle>
  );
};

export default NavBar;
