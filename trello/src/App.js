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

    const [columsList, setColumsList] = useState([  {id: 0, title: 'To Do', body: 'Карточки для To Do'},
                                                             {id: 1, title: 'In Progress', body: 'Карточки для Progress'},
                                                             {id: 2, title: 'Testing', body: 'Карточки для Testing'},
                                                             {id: 3, title: 'Done', body: 'Карточки для Done'}
                                                ])



  return (
    <div className="App">
        {!localStorage.length
            ? <Authorization create = {createUser}/>
            : <WorkPage remove = {removeAllData}
                        userName = {userName}
                        colums = {columsList}
                 >

            </WorkPage>
        }
    </div>
  );


}

export default App;
