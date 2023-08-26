import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from 'redux/slice/filtersSlice';
import { selectContactsFilter } from 'redux/selectors/selectors';
import { LabelStyle, InputStyle, BodyStyle } from './Filter.module';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const changer = ({ currentTarget: { value } }) => {
    const normallValue = value.toLowerCase().trim();
    dispatch(setContactsFilter(normallValue));
  };

  return (
    <BodyStyle>
      <LabelStyle>
        <InputStyle
          type="text"
          name="filter"
          placeholder="Введіть ім'я контакту"
          value={filter}
          onChange={changer}
        />
      </LabelStyle>
    </BodyStyle>
  );
};
