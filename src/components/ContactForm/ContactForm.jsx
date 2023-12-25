import React, { useState } from 'react';
import css from './ContactForm.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faCheck } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input/Input';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    addContact(name, number);

    setName('');
    setNumber('');
  };

  return (
    <form className={css['form-container']} onSubmit={handleSubmit}>
      <Input
        inputClass={css['name-input']}
        labelClass={css['name-label']}
        type="text"
        label={
          <span className={css['label-box']}>
            <FontAwesomeIcon icon={faUser} className={css['icon-input']} />
            Name
          </span>
        }
        inputName="name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <Input
        inputClass={css['tel-input']}
        labelClass={css['tel-label']}
        type="tel"
        label={
          <span className={css['label-box']}>
            <FontAwesomeIcon icon={faPhone} className={css['icon-input']} />
            Number
          </span>
        }
        inputName="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        required
      />
      <button className={css['button']} type="submit">
        <FontAwesomeIcon icon={faCheck} className={css['iconBtn']} />
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
