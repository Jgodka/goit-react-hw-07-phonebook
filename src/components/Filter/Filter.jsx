import { FilterLabel, FilterInput } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
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
