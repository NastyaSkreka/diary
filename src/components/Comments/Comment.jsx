import React from 'react';
import styles from '../../styles/Comment.module.css'

const Comment = ({item}) => {
    return (
    <div className={styles.card}>
        
        <div>
            {item.comment}
        </div>  
    </div>
    );
};
export default Comment;