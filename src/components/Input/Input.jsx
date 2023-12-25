import PropTypes from 'prop-types';
import css from './Input.module.css';

const Input = ({
  type,
  label,
  inputName,
  value,
  onChange,
  required,
  inputClass,
  labelClass,
}) => (
  <label className={`${css['input-label']} ${labelClass}`}>
    {label}
    <input
      className={`${css['input']} ${inputClass}`}
      type={type}
      name={inputName}
      value={value}
      onChange={onChange}
      required={required}
    />
  </label>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  inputClass: PropTypes.string,
  labelClass: PropTypes.string,
};

export default Input;
