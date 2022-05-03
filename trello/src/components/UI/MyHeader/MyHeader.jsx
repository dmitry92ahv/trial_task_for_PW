import React from 'react';
import styles from './MyHeader.module.css';

const MyHeader = ({children, remove}) => {



    return (
        <header className={styles.myHdr}>
            <span className={styles.myHdr__userName}>{children} </span>
            <span title={'Удалить все данные и пользователя'}
                  onClick={()=> {remove()}}
                  className={styles.myHdr__delete}>✖</span>
        </header>
    );
};

export default MyHeader;