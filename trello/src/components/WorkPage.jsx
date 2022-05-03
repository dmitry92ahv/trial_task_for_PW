import React from 'react';
import MyHeader from "./UI/MyHeader/MyHeader";
import CardItem from "./CardItem";
import CardList from "./CardList";

const WorkPage = ({userName, remove}) => {
    return (
        <div>
            <MyHeader remove={remove}>{userName}</MyHeader>
            <CardList nameColumn = {'To Do'}/>
            <CardList nameColumn ={'In Progress'}/>
            <CardList nameColumn = {'Testing'}/>
            <CardList nameColumn = {'Done'}/>
        </div>
    );
};

export default WorkPage;