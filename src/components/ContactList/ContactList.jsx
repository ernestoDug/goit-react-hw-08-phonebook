import { useSelector } from 'react-redux';

import {
  selectContactsFilter,
  selectContacts,
} from 'redux/selectors/selectors';

import { ContactsListItem } from '../ContactListItem/ContactListItem';

import { ContactsListStyle } from './ContactsListStyle.module';
import CounterContacts from 'components/CounterContacts/CounterContacts';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectContactsFilter);
  const filtrat = [
    ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
  ];

  return (
    <> 
    
    <CounterContacts/>
    <ContactsListStyle>
      {filtrat.map(({ name, number, id }) => (
        <ContactsListItem key={id} id={id} name={name} number={number} />
      ))}
    </ContactsListStyle>
    </>
  );
};
