import React from 'react';
import MyHeader from "./UI/MyHeader/MyHeader";
import CardList from "./CardList";

const WorkPage = ({userName, remove, colums}) => {
    return (
        <div>
            <MyHeader remove={remove}>{userName}</MyHeader>

            {colums.map((columns)=>
                <CardList nameColumn = {columns.title} key={columns.id} bodyColumns={columns.body}/>
            )}
        </div>
    );
};

export default WorkPage;