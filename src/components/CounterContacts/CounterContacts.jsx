import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectContacts } from 'redux/selectors/selectors';
import { CounterContactsStyle } from 'components/CounterContacts/CounterContacts.module';

const CounterContacts = () => {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <CounterContactsStyle>
        Контактів в книзі: {contacts.length}📝
      </CounterContactsStyle>
    </>
  );
};

export default CounterContacts;
