import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectContacts } from 'redux/selectors/selectors';
import { addContact } from 'redux/operations';
import ButtonSbmt from 'components/ButtonSbmt/ButtonSbmt';
import {
  FormStyle,
  LabelStyled,
  InputStyle,
  BodyStyle,
} from './ContactForm.module';

export const ContactForm = ({ onCloseModal }) => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  // відправник
  const Submiter = event => {
    event.preventDefault();
    const form = event.target;
    const formName = form.elements.name.value;
    const formNumber = form.elements.number.value;
    if (contacts.some(({ name }) => name === formName)) {
      return toast.warn(`🥁 Уважніше, ${formName}  вже Є в конТАКтах 🥁`);
    }
    if (contacts.some(({ number }) => number === formNumber)) {
      return toast.warn(`🥁 Уважніше, ${formNumber}  вже Є в конТАКтах 🥁`);
    }
    // console.log(formNumber, formNumber);
    dispatch(addContact({ name: formName, number: formNumber.toString() }))
      // для промісу
      .unwrap()
      .then(originalPromiseResult => {
        toast.success(`🥁${originalPromiseResult.name} тепер в контактах🥁`);
      })
      .catch(() => {
        toast.warn(`⛔Спробуйте ще, сталася помилка⛔`);
      });
    // закривання після додаваня
    onCloseModal();
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

      <FormStyle onSubmit={Submiter} autoComplete="off">
        <BodyStyle>
          <LabelStyled>
            Ім'я 📌
            <InputStyle
              type="text"
              name="name"
              // pattern= "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              //  так чомусь помилка в консолі
              title="Ім'я може містити лише літери, апостроф, тире та пробіли..."
              required
              placeholder="Введіть ім'я..."
              value={contacts.name}
            />
          </LabelStyled>
        </BodyStyle>

        <BodyStyle>
          <LabelStyled>
            Номер 📞
            <InputStyle
              type="tel"
              name="number"
              // pattern= "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              // i так чомусь помилка в консолі
              title="Номер телефону має складатися з цифр і може містити пробіли, тире, круглі дужки та починатися з +"
              placeholder="Введіть номер телефону..."
              value={contacts.number}
            />
          </LabelStyled>
        </BodyStyle>
        <ButtonSbmt />
      </FormStyle>
    </>
  );
};

ContactForm.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};
