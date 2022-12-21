import React from "react";

export const Title = (props) =>{
    // console.log(props);
    // otra forma seria usando el destructiring
    // export const title = ({greeting}) =>{ return( <h1>Hola yo soy {greeting}</h1>)}
    return (
        <div className="container-fluid">
            <h1 className=" py-4 fst-italic">Hola BienVenido a {props.greeting}</h1>
        </div>
        
    );
}

export default Title;