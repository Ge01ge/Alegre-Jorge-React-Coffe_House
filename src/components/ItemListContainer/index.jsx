import React from "react";
import Title from "../Title";

export const ItemListContainer = ({greeting}) =>{
    // alt + 96 = ` (acento grave)
    return(
        <Title greeting={greeting} />
    );
}

export default ItemListContainer;