import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { addComment, setSelectedColor} from '../../features/items/itemsSlice';
import { ChromePicker } from 'react-color';

import styles from '../../styles/Comments.module.css';


const Comments = () => {
    const selectedSqColor = useSelector((state) => state.items.selectedColor);

    const handleColorChange = (color) => {
        dispatch(setSelectedColor(color.hex)); 
    };
    
  const dispatch = useDispatch();
  const selectedItemId = useSelector((state) => state.items.selectedId);
  const items = useSelector((state) => state.items.list);
  
  const [commentValue, setCommentValue] = useState('');

    const handleAddComment = () => {
    if (commentValue.trim() !== '' && selectedItemId) {
      dispatch(
        addComment({
            text: commentValue, 
            color: selectedSqColor, 
          })
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
                <li key={index} className={styles.comment}>
                    <div className={styles.colorSquare} style={{ backgroundColor: comment.color }}></div>
                    <div className={styles.text}>{comment.text}</div>
                </li>
            ))}
    </ul>
   
      <div className={styles.wrapper}>
        <div className={styles.colorPickerContainer}>
                <div className={styles.colorSquare}  style={{ backgroundColor: selectedSqColor }}></div>
                <ChromePicker color={selectedSqColor} onChange={handleColorChange} />
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
  );
};

export default Comments;
