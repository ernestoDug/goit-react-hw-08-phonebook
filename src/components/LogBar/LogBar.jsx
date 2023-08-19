import { LoggedItemStyle, LoggedLinkStyle, LogBarListStyle } from './LogBar.module';

const LogBar = () => {
  return (
    <LogBarListStyle>
      <LoggedItemStyle>
        <LoggedLinkStyle to="login">Логін</LoggedLinkStyle>
      </LoggedItemStyle>
      <LoggedItemStyle>
        <LoggedLinkStyle to="register">Регістрація</LoggedLinkStyle>
      </LoggedItemStyle>
    </LogBarListStyle>
  );
};

export default LogBar;
