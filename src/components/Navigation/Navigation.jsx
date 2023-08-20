import { useAuth } from 'hooks/useAuth';
import { LogoStyle, NavStyle, NavLinkStyle, SpanStyle, BodyStyle } from './Navigation.module';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <BodyStyle>
      <LogoStyle to="/">☎️</LogoStyle>
      {/* уомва переходу */}
      <NavStyle>
        {isLoggedIn && <NavLinkStyle to="/contacts"> <SpanStyle>Контакти </SpanStyle> 📑</NavLinkStyle>}
      </NavStyle>
    </BodyStyle>
  );
};

export default Navigation;
