import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { addComment} from '../../features/items/itemsSlice';
import styles from '../../styles/Comments.module.css';
import Comment from './Comment';

const Comments = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.list);
  
  const [commentValue, setCommentValue] = useState('');

  const handleAddComment = () => {
    if (commentValue.trim() !== '') {
      dispatch(
        addComment(commentValue)
      );
      setCommentValue('');
    }
  };
  
  return (  
    <div className={styles.card}>
      <h2 className={styles.title}>Comments</h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <ul className={styles.item}>
              {item.comments.map((comment, index) => (
                <li key={index} className={styles.comment}>{comment}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className={styles.wrapper}>
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
  );
};

export default Comments;
