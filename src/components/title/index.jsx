import React from "react";

export const title = (props) =>{
    // console.log(props);
    // otra forma seria usando el destructiring
    // export const title = ({greeting}) =>{ return( <h1>Hola yo soy {greeting}</h1>)}
    return (
        <h1>Hola BienVenido a {props.greeting}</h1>
    );
}

export default title;