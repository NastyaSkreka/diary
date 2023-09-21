import React from 'react'
import styles from '../../styles/Item.module.css'

const ListItem = ({ onDelete, item, onSelect, isActive }) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <p className={styles.text}>{item.name}</p>
        <p className={styles.text}>Comments: {item.comments.length}</p>
        <div className={styles.actions}>
          <button onClick={onDelete} className={styles.delete}>
            Delete{' '}
          </button>
          <button
            onClick={onSelect}
            className={isActive ? styles.active : styles.comment}
          >
            Comment
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListItem
