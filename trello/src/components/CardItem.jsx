import React from "react";
import MyButton from "./UI/button/MyButton";

const CardItem =(props) =>{
    return(
        <div className="list__item">
            {props.bodyColumn}

        </div>
    );
}

export default CardItem;