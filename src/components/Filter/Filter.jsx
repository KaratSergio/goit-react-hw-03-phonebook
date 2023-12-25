import PropTypes from 'prop-types';
import css from './Filter.module.css';

import Input from '../Input/Input';

export const Filter = ({ value, onChange }) => (
  <Input
    inputClass={css['name-input']}
    labelClass={css['name-label']}
    type="text"
    label="Find contacts by name"
    inputName="filter"
    value={value}
    onChange={onChange}
    required
  />
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
