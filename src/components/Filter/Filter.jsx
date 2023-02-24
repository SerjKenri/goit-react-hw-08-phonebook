import { FilterLabel, FilterInput, FormS } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const handleChange = e => {
        dispatch(setFilter(e.target.value));
    };

    return (
        <FormS>
            <FilterLabel>
                Find contacts by Name
                <FilterInput
                    type="text"
                    name="filter"
                    placeholder="Enter filter"
                    value={filter}
                    onChange={handleChange}
                />
            </FilterLabel>
        </FormS>
    );
};
