import React from 'react';
import MyButton from "./UI/button/MyButton";
import CardItem from "./CardItem";

const CardList = (props) => {
    return (
        <div className="list">
            <h1 style={{background: 'transparent',
                        fontSize: '16px',
                        cursor: 'pointer'}}
                onClick={() => console.log('TODO: Rename')}
            >
                {props.nameColumn}
            </h1>

            <CardItem bodyColumn = {props.bodyColumns}/>
            <MyButton onClick={() => console.log('ToDo: popup new card')}>+ Добавить карточку</MyButton>
        </div>
    );
};

export default CardList;