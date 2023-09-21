import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, setSelectedItem } from '../../features/items/itemsSlice';
import styles from '../../styles/Items.module.css'
import ListItem from './Item';

const Items = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.items.list);
    const [inputValue, setInputValue] = useState('');
    const [isActive, setIsActive] = useState(false);

    const handleInputChange = (e) => setInputValue(e.target.value);
  
    const handleButtonClick = () => {
        if (inputValue.trim() !== '') {
          dispatch(addItem(inputValue));
          setInputValue('');
        }
      };

    const handleDelete = (id) => {
        dispatch(deleteItem(id));
    };

    const handleSelectItem = (itemId) => { 
        dispatch(setSelectedItem(Number(itemId)));
        setIsActive(!isActive);
      };

    return (
        <>
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
        <ul>
        {items?.map((item) => (
          <li key={item.id}>
            <ListItem
              item={item}
              onSelect={() => handleSelectItem(item.id)} 
              isActive={isActive} 
              onDelete={() => handleDelete(item.id)}
            />
          </li>
        ))}
      </ul>
      </div>     
      </>
    );
};

export default Items;