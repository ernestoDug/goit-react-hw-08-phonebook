import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BodyStyle,
  FormStyle,
  LabelStyle,
  InputStyle,
  ButtonStyle,
  LinkForLogStyle,
} from './LoginForm.module';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const submiter = event => {
    event.preventDefault();

    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(originalPromiseResult => {
        // console.log(originalPromiseResult, "prm");
        // ****************************************************************************
        toast.success(
          `🥁З Поверненням, друже ${originalPromiseResult.user.name}🥁`
        );
      })
      .catch(() => {
        toast.warn(`⛔Спробуйте ще, сталася помилка⛔`);
      });
    form.reset();
  };

  return (
    <>
      {' '}
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <FormStyle onSubmit={submiter} autoComplete="off">
        <BodyStyle>
          <LabelStyle>
            Email 📨
            <InputStyle
              type="email"
              name="email"
              // pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
              title="Електронна адреса може містити літери, цифри, апостроф і повинна супроводжуватися @"
              required
              placeholder="Введіть email ..."
            />
          </LabelStyle>
        </BodyStyle>

        <BodyStyle>
          <LabelStyle>
            Пароль 🎰
            <InputStyle
              type="password"
              name="password"
              // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
              title="Пароль має містити принаймні одну цифру, одну велику та малу літери та не менше 8 символів.."
              required
              placeholder="Введіть пароль..."
            />
          </LabelStyle>
        </BodyStyle>

        <ButtonStyle type="submit">Vхід 🧵</ButtonStyle>
        <LinkForLogStyle to="/register">
          Ви ще не з нами, РЕЄСТРУЙТЕСЯ🎯
        </LinkForLogStyle>
      </FormStyle>
    </>
  );
};

export default LoginForm;
