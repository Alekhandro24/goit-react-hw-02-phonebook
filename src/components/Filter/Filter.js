import propTypes from 'prop-types';
import { FilterName } from 'components/Filter/Filter.styled';

export const Filter = ({ filter, handleChange }) => (
  <div>
    <label>Find contacts by Name </label>
    <FilterName
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={handleChange}
    />
  </div>
);

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};
