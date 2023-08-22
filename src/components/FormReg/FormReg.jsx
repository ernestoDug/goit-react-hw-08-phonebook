import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { register } from 'redux/auth/operations';

import {
  BodyStyle,
  FormStyle,
  InputStyle,
  LabelStyle,
  ButtonStyle,
  LinkForLog,
} from './FormReg.module';

const FormReg = () => {
  const dispatch = useDispatch();

  const submiter = event => {
    event.preventDefault();
    const form = event.currentTarget;
    // закид обекта регістрації до credentials
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      // ##########################/w
      .then(originalPromiseResult => {
        toast.success(`🥁${originalPromiseResult.user.name}вітаємо вас🥁`);
      })
      .catch(() => {
        toast.warn(`⛔Спробуйте ще, сталася помилка⛔`);
      });

    form.reset();
  };

  return (
    <>
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
            Ім'я
            <InputStyle
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Назва може містити лише літери, апостроф, тире та пробіли."
              placeholder="Введіть  Ім'я..."
              required
            />
          </LabelStyle>
        </BodyStyle>

        <BodyStyle>
          <LabelStyle>
            Email 📨
            <InputStyle
              type="email"
              name="email"
              // pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
              title="Електронна адреса може містити літери, цифри, апостроф і повинна супроводжуватися @"
              placeholder="Введіть email ..."
              required
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
              title="Пароль має містити принаймні одну цифру, одну велику та малу літери та не менше 8 символів."
              placeholder="Введіть пароль ..."
              required
            />
          </LabelStyle>
        </BodyStyle>

        <ButtonStyle type="submit">Регістрація 🪪</ButtonStyle>
        <LinkForLog to="/login">Є акаунт? З🔔ходьте</LinkForLog>
      </FormStyle>
    </>
  );
};

export default FormReg;
