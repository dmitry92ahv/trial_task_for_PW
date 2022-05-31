import React from "react";

const CardItem =({contentCard}) =>{
    //console.log({contentCard})
    return(
        <div style={{background: 'transparent'}}>
            {contentCard}
        </div>
    );
}

export default CardItem;