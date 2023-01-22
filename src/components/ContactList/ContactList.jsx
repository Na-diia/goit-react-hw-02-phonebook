import PropTypes from 'prop-types';

import styles from './contact-list.module.css';

export const ContactList =({filter, deleteContact}) => {
    return(
     <ul className={styles.list}>
     {filter.map(({id, name, number}) => (
     <li key={id}><p className={styles.item}>{name} : {number}</p>
     <button
    type="button"
    className={styles.delete}
    onClick={() => deleteContact(id)}>Delete</button></li>))}
      </ul>
    )
};

ContactList.prototype = {
  filter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};