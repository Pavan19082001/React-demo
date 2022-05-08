/* function FunctionalComponent(){
    return(
        <div>
            <h1>Welcome to React class</h1>
        </div>
    );
} */

//Using arrow syntax...

/* const FunctionalComponent = ()=> <h1>Learn React with fun</h1>
export default FunctionalComponent */

//Demo on props...
/* const FunctionalComponent = (props)=>{
    console.log(props);
    return (
    <div>
    <h4>Hello, {props.name} a.k.a {props.heroName}</h4>
    </div>
    );
} */

//Destructing Props & state --> es6 feature...
import React from 'react'

function functionalComponent(props) {
    const {name, heroName} = props;
  return (
    <div>
        <h2>Hello, {name} a.k.a {heroName}</h2>
    </div>
  )
}

export default functionalComponent