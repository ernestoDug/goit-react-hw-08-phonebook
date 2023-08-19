// import { Notify } from 'notiflix';
import { Form, Input, Label, Button, LoggedLink } from './LoginForm.module';
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
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input
          type="email"
          name="email"
          pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          required
          placeholder="Enter email ..."
        />
      </Label>
      <Label>
        Пароль
        <Input
          type="password"
          name="password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Пароль має містити принаймні одну цифру, одну велику та малу літери та не менше 8 символів.."
          required
          placeholder="Введіть пароль..."
        />
      </Label>
      <Button type="submit">Вхід 🧵</Button>
      <LoggedLink to="/register">Ви ще не з нами, РЕЄСТРУЙТЕСЯ</LoggedLink>
    </Form>
  );
};

export default LoginForm;
