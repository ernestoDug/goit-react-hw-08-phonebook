import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { deleteContact } from 'redux/operations';

import {
  ContactItemStyle,
  ContactNameStyle,
  ContactNumberStyle,
  ButtonStyle,
  } from './ContactListItem.module';

// import { Notify } from 'notiflix';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId))
      .unwrap()
      .then(originalPromiseResult => {
        return toast.success(
          `🥁${originalPromiseResult.name} тепер видалено`
        );
      })
      .catch(() => {
        toast.warn(`⛔Спробуйте ще, сталася помилка ⛔`);
      }
      );
  };

  return (
    <> 
    <ToastContainer
    position="top-right"
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
    <ContactItemStyle key={id}>
      <ContactNameStyle>
        {/* <UserIcon /> */}
        📕{name}
      </ContactNameStyle>
      <ContactNumberStyle>
      ☎️{number}
      </ContactNumberStyle>
      <ButtonStyle onClick={() => handleDeleteContact(id)}>
        {/* <UserDeletedIcon /> */}
        Видалити♻️
      </ButtonStyle>
    </ContactItemStyle>
    </>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
