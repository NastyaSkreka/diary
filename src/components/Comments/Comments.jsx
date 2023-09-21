import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from '../../features/items/itemsSlice'
import Comment from './Comment'

import styles from '../../styles/Comments.module.css'

const Comments = () => {
  const dispatch = useDispatch()

  const [commentValue, setCommentValue] = useState('')
  const [color, setColor] = useState('#000')

  const selectedItemId = useSelector((state) => state.items.selectedId)
  const items = useSelector((state) => state.items.list)
  const selectedItem = items.find((item) => item.id === selectedItemId)

  const handleAddComment = () => {
    if (commentValue.trim() !== '' && selectedItemId) {
      dispatch(
        addComment({
          text: commentValue,
          color: color,
        })
      )
      setCommentValue('')
    }
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Comments</h2>
      <ul>
        {selectedItem?.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </ul>

      <div className={styles.wrapper}>
        <div className={styles.colorContainer}>
          <input
            style={{ height: '100%' }}
            type="color"
            title='Choose your color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <textarea
          placeholder="Type comment here..."
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
          className={styles.textarea}
        />
        <button
          onClick={handleAddComment}
          className={styles.button}
          disabled={!commentValue}
        >
          Add Comment
        </button>
      </div>
    </div>
  )
}

export default Comments
