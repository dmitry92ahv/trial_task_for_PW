import React, {useState} from "react";
import MyModal from "./components/UI/MyModal/MyModal";

function App() {

    const [modal, setModal] = useState(!localStorage.length);


    //if(localStorage.length !== 0) {setModal(true)};

  return (
    <div className="App">

      <MyModal visible={modal} setVisible={setModal}>TODO: authorization</MyModal>
      <div>TODO: colums</div>
    </div>
  );


}

export default App;
