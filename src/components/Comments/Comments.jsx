import React, {useState} from 'react';
import styles from '../../styles/Forms.module.css'

const Comments = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleButtonClick = () => { 
      console.log(`${inputValue}`);
    };
    return (
          <div className={styles.card}>
            <h2 className={styles.title}>Comments</h2>
            <div className={styles.wrapper}>
            <textarea
                placeholder="Type comment here..."
                value={inputValue}
                onChange={handleInputChange}
                className={styles.textarea }
                />
            <button
              onClick={handleButtonClick}
              className={styles.button} 
            >
              Add new
            </button>
          </div>
          </div>
    );
};

export default Comments;