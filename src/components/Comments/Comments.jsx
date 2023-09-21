import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { addComment} from '../../features/items/itemsSlice';
import styles from '../../styles/Comments.module.css';

const Comments = () => {
  const dispatch = useDispatch();
  const selectedItemId = useSelector((state) => state.items.selectedId);
  const items = useSelector((state) => state.items.list);
  
  const [commentValue, setCommentValue] = useState('');

    const handleAddComment = () => {
    if (commentValue.trim() !== '' && selectedItemId) {
      dispatch(
        addComment( commentValue )
      );
      setCommentValue('');
    }
  };

  const selectedItem = items.find((item) => item.id === selectedItemId);
  
  return (  
    <div className={styles.card}>
      <h2 className={styles.title}>Comments</h2>
      <ul>
          {selectedItem?.comments.map((comment, index) => (
            <li key={index} className={styles.comment}>{comment}</li>
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
