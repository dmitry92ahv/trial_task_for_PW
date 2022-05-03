import React from 'react';
import MyHeader from "./UI/MyHeader/MyHeader";

const WorkPage = ({userName, remove}) => {
    return (
        <div>
            <MyHeader remove={remove}>{userName}</MyHeader>
            <div>TODO: colums</div>
        </div>
    );
};

export default WorkPage;