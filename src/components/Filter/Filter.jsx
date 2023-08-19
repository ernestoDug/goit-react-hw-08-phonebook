import { useDispatch, useSelector } from 'react-redux';

import { setContactsFilter } from 'redux/constacts/filtersSlice';
import { selectContactsFilter } from 'redux/selectors/selectors';

import { LabelStyle, InputStyle, BodyStyle } from './Filter.module';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const handleChangeFilter = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setContactsFilter(normalizedValue));
  };

  return (
    <BodyStyle>
    <LabelStyle>
      <InputStyle
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={filter}
        onChange={handleChangeFilter}
      />
    </LabelStyle>
    </BodyStyle>
  );
};
