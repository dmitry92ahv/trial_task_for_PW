import React from 'react';
import MyHeader from "./UI/MyHeader/MyHeader";
import CardList from "./CardList";

const WorkPage = ({userName, remove, columns, create}) => {
    return (
        <div>
            <MyHeader remove={remove}>{userName}</MyHeader>

            {columns.map((columns)=>
                <CardList create = {create}
                          nameColumn = {columns.title}
                          key={columns.id}
                          bodyColumns={columns.body}
                />
            )}
        </div>
    );
};

export default WorkPage;