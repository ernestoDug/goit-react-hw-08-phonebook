import { useDispatch } from 'react-redux';
import {
  AvDivStyle,
  NavStyle,
  AvStyle,
  NameStyle,
  EmailStyle,
  BtnStyle,
} from './UserMenu.module';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

const UserMenu = () => {
  const dispatch = useDispatch();
  
  const { user } = useAuth();

  return (
    <NavStyle>
      <AvDivStyle>
        <div>
          <NameStyle>{user.name}</NameStyle>
          <EmailStyle>{user.email}</EmailStyle>
        </div>
        <AvStyle></AvStyle>
      </AvDivStyle>
      <BtnStyle type="button" onClick={() => dispatch(logOut())}>
      Вийти 👣
      </BtnStyle>
    </NavStyle>
  );
};

export default UserMenu;
