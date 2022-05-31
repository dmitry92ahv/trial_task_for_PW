import React from 'react';
import MyButton from "./UI/button/MyButton";
import CardItem from "./CardItem";

const CardList = ({nameColumn, create, bodyColumns}) => {


    const addNewCard = (e) => {
        e.preventDefault();
        const newCard = {id: Date.now(),  bodyCard: 'ДА, ладно!', type: 3}
        create(newCard)
    }

    return (
        <div className="list">
            <h1 style={{background: 'transparent',
                        fontSize: '16px',
                        cursor: 'pointer'}}
                onClick={() => console.log('TODO: Rename')}
            >
                {nameColumn}
            </h1>
            {bodyColumns.map((card) =>
            <CardItem className="list__item" contentCard = {card.bodyCard} key = {card.id}></CardItem>)}

            <MyButton onClick={addNewCard}>+ Добавить карточку</MyButton>
        </div>
    );
};

export default CardList;