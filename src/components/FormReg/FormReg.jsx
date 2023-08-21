import { useDispatch } from 'react-redux';

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

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(originalPromiseResult => {
        // Notify.success(`${originalPromiseResult.user.name} welcome!`);
      })
      .catch(() => {
        // Notify.failure("Sorry, something's wrong");
      });

    form.reset();
  };

  return (
    <FormStyle onSubmit={handleSubmit} autoComplete="off">
      <BodyStyle>
        <LabelStyle>
          Ім'я
          <InputStyle
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name ..."
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
            pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
            title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
            placeholder="Enter email ..."
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
            title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
            placeholder="Enter password ..."
            required
          />
        </LabelStyle>
      </BodyStyle>

      <ButtonStyle type="submit">Регістрація 🪪</ButtonStyle>
      <LinkForLog to="/login">Є акаунт? З🔔ходьте</LinkForLog>
    </FormStyle>
  );
};

export default FormReg;
