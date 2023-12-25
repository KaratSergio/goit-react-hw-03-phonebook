import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTrash } from '@fortawesome/free-solid-svg-icons';

export const ContactList = ({ contacts, deleteContact }) => (
  <ul className={css.list}>
    {contacts.map(contact => (
      <li key={contact.id} className={css.item}>
        <div className={css.contactInfo}>
          <div className={css.nameContainer}>
            <FontAwesomeIcon className={css.nameIcon}  icon={faUser} />
            <span className={css.name}>{contact.name}:</span>
          </div>
          <span>{contact.number}</span>
        </div>
        <button
          className={css.deleteButton}
          onClick={() => deleteContact(contact.id)}
        >
          <FontAwesomeIcon icon={faTrash} />   
            Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
