import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectContacts } from 'redux/selectors/selectors';
import {
  CounterContactsStyle,
  SpanStyle,
} from 'components/CounterContacts/CounterContacts.module';

const CounterContacts = () => {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <CounterContactsStyle>
        {' '}
        📝<SpanStyle>Контактів в книзі: {contacts.length} </SpanStyle>
      </CounterContactsStyle>
    </>
  );
};

export default CounterContacts;
