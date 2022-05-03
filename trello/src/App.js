import React, {useState} from "react";
import MyModal from "./components/UI/MyModal/MyModal";
import "./App.css";
import MyHeader from "./components/UI/MyHeader/MyHeader";
import MyInput from "./components/UI/input/MyInput";
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

    const removeData = () => {
        setUser('');
        localStorage.clear();
    }

  return (
    <div className="App">
        {!localStorage.length
            ? <Authorization create = {createUser}/>
            : <WorkPage remove = {removeData} userName = {userName}></WorkPage>
        }
    </div>
  );


}

export default App;
