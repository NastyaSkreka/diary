import React from 'react';
import styles from '../../styles/FormItem.module.css'

const ListItem = ({ name, onDelete }) => {
  return (
    <div className={styles.card}>
      <p>{name}</p>
      <button onClick={onDelete} className={styles.button}>
        Delete
      </button>
    </div>
  );
};

export default ListItem;
