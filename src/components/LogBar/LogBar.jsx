import { ItemStyle, LinkForLogStyle, LogBarListStyle } from './LogBar.module';

const LogBar = () => {
  return (
    <LogBarListStyle>
      <ItemStyle>
        <LinkForLogStyle to="login">Логін 🔑</LinkForLogStyle>
      </ItemStyle>
      <ItemStyle>
        <LinkForLogStyle to="register">Реєстрація ↩️</LinkForLogStyle>
      </ItemStyle>
    </LogBarListStyle>
  );
};

export default LogBar;
