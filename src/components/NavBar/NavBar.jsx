import { useAuth } from 'hooks/useAuth';
import {
  LogoStyle,
  NavContStyle,
  NavLinkStyle,
  SpanStyle,
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
            <SpanStyle>Контакти </SpanStyle>📑
          </NavLinkStyle>
        )}
      </NavContStyle>
    </BodyStyle>
  );
};

export default NavBar;
