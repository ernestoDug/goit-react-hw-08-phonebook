import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors/selectors';

import { Section } from '../../components/Section/Section';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import {
  // AddUserIcon,
  ButtonStyle,
  WpapStyle,
  NavStyle,
  FiltrWrStyle,
  TitleStyle,
} from './Contacts.module';
import { Modal } from 'components/Modal/Modal';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [isShowModalAddUser, setIsShowModalAddUser] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleOpenModal = () => {
    setIsShowModalAddUser(prev => !prev);
  };

  return (
    <WpapStyle>
        {isLoading && !error && <b>🚛Завантажую...🚧</b>}
      <Section>
        <NavStyle>
          <TitleStyle>Контакти 📑</TitleStyle>
          <FiltrWrStyle>
            <Filter/>
            <ButtonStyle type="button" onClick={handleOpenModal}>
                 Новий контакт ⭐
            </ButtonStyle>
          </FiltrWrStyle>
        </NavStyle>
        <ContactList />
      </Section>
      {isShowModalAddUser && (
        <Modal
          children={
            <Section title="Додати контакт">
              <ContactForm onCloseModal={handleOpenModal} />
            </Section>
          }
          onCloseModal={handleOpenModal}
        ></Modal>
      )}
    </WpapStyle>
  );
};

export default Contacts;
