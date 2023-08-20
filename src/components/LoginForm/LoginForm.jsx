// import { Notify } from 'notiflix';
import {
  FormStyle,
  LinkForLog,
  InputStyle,
  LabelStyle,
  ButtonStyle,
  BodyStyle,
} from './LoginForm.module';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(originalPromiseResult => {
        // Notify.success(`${originalPromiseResult.user.name} welcome back!`);
      })
      .catch(() => {
        // Notify.failure('Incorrect login or password');
      });

    form.reset();
  };

  return (
    <FormStyle onSubmit={handleSubmit} autoComplete="off">
      <BodyStyle>
        <LabelStyle>
          Email 📨
          <InputStyle
            type="email"
            name="email"
            pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
            title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
            required
            placeholder="Enter email ..."
          />
        </LabelStyle>
      </BodyStyle>

      <BodyStyle>
        <LabelStyle>
          Пароль 🎰
          <InputStyle
            type="password"
            name="password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            title="Пароль має містити принаймні одну цифру, одну велику та малу літери та не менше 8 символів.."
            required
            placeholder="Введіть пароль..."
          />
        </LabelStyle>
      </BodyStyle>

      <ButtonStyle type="submit">Vхід 🧵</ButtonStyle>
      <LinkForLog to="/register">Ви ще не з нами, РЕЄСТРУЙТЕСЯ🎯</LinkForLog>
    </FormStyle>
  );
};

export default LoginForm;
