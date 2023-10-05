import { FilterLabel, FilterInput } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <FilterLabel>
      Find contacts by name
      <br />
      <FilterInput
        type="text"
        onChange={event => dispatch(setFilter(event.target.value.trim()))}
        value={filter}
        name="filter"
        id="filter"
      />
    </FilterLabel>
  );
};
