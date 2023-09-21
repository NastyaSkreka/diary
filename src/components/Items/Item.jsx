import React from 'react';
import styles from '../../styles/FormItem.module.css'


const ListItem = ({ onDelete,  item, onSelect,  isActive }) => {

  return (
    <div
      className={styles.card}
    >
      <div className={styles.container}>
        <p>{item.name}</p>
        <div className={styles.actions}>
            <button onClick={onDelete} className={styles.delete}>Delete </button>
            <button onClick={onSelect} className= {isActive ? styles.active : styles.comment} >Comment</button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;



