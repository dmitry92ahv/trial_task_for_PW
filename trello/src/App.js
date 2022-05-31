import React, {useState} from "react";
import "./App.css";

import Authorization from "./components/Authorization";
import WorkPage from "./components/WorkPage";

function App() {
    const [userName, setUser] = useState((!localStorage.length
                                            ? ''
                                            : localStorage.getItem('userNameStorage')))

    const createUser = (newUserName) => {
        setUser(newUserName);
        localStorage.setItem('userNameStorage', newUserName);
    }
    const removeAllData = () => {
        setUser('');
        localStorage.clear();
    }

    const [cardList, setCardList] = useState([
        {id: 0, bodyCard: 'содержимое первой карточки To Do', type: 0},
        {id: 1, bodyCard: 'содержимое первой карточки In Progress', type: 1},
        {id: 2, bodyCard: 'содержимое первой карточки Testing', type: 2},
        {id: 3, bodyCard: 'содержимое первой карточки Done', type: 3},
    ])

    const colList = [  {id: 0, title: 'To Do', body: cardList.filter(p => p.type === 0)},
        {id: 1, title: 'In Progress', body: cardList.filter(p => p.type === 1)},
        {id: 2, title: 'Testing', body: cardList.filter(p => p.type === 2)},
        {id: 3, title: 'Done', body: cardList.filter(p => p.type === 3)}
    ];

    const [columnsList, setColumnsList] = useState(colList)

    const createCard = (newCard) => {
        setCardList([...cardList, newCard]);
        setColumnsList(colList);
        console.log(colList);
    }


  return (
    <div className="App">
        {!localStorage.length
            ? <Authorization create = {createUser}/>
            : <WorkPage remove = {removeAllData}
                        userName = {userName}
                        columns = {columnsList}
                        create = {createCard}
                        cards = {cardList}
                 >

            </WorkPage>
        }
    </div>
  );


}

export default App;
