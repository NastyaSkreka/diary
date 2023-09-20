import React, {useState} from 'react';
import styles from '../../styles/Forms.module.css'

const Items = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleButtonClick = () => {
      console.log(`${inputValue}`);
    };

    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Items</h2>
            <div className={styles.wrapper}>
                <input
                type="text"
                placeholder="Type name here..."
                value={inputValue}
                onChange={handleInputChange}
                className={styles.input} 
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

export default Items;