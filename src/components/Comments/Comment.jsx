import React from 'react'
import styles from '../../styles/Comments.module.css'

const Comment = ({ comment }) => {
  return (
    <li className={styles.comment}>
      <div
        className={styles.color}
        style={{ backgroundColor: comment.color }}
      />
      <div className={styles.text}>{comment.text}</div>
    </li>
  )
}
export default Comment
