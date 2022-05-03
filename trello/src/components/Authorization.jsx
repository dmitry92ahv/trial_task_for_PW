import React,{useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/MyModal/MyModal";


const Authorization = ({create}) => {

        const [userName, setUserName] = useState('');

        const createUser = (e) => {
            e.preventDefault();
            let newUser = userName;
            create(newUser);
            setUserName('');
        }

    return (
        <MyModal visible={true}>
            <form style={{background: 'transparent'}}>
                <MyInput
                    value = {userName}
                    onChange = {event => setUserName(event.target.value)}
                    type="text"
                    placeholder="Ваше имя"
                />
                <MyButton onClick={createUser}>Создать пользователя</MyButton>
            </form>
        </MyModal>

    );
};

export default Authorization;