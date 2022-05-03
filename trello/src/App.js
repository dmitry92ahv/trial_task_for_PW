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

  return (
    <div className="App">
        {!localStorage.length
            ? <Authorization create = {createUser}/>
            : <WorkPage remove = {removeAllData} userName = {userName}></WorkPage>
        }
    </div>
  );


}

export default App;
