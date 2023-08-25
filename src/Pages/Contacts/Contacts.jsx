import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from "framer-motion";


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
    <motion.div
    className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    > 
    <WpapStyle>
        {isLoading && !error && <b>🚛Завантажую...🚧</b>}
      <Section key={Section}>
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
    </motion.div>
  );
};

export default Contacts;
