import { useReducer } from 'react'

function UseReducer() {
    const counterReducer = (state, action) => {
        switch(action.type){
            case "INCREMENT": return {count: state.count + 1};
            case "DECREMENT": return {count: state.count -1};
            case "MULTIPLY": return {count: state.count * action.num};
        }
    };

    const [state, dispatch] = useReducer(counterReducer, {count: 0, name: ""});
  return (
    <div>
        <h2>useReducer Demo</h2>
        <h4>Count: {state.count}</h4>
        <button onClick={()=>dispatch({type: "INCREMENT"})}>Increment</button>
        <button onClick={()=>dispatch({type: "DECREMENT"})}>Decrement</button>
        <button onClick={()=>dispatch({type: "MULTIPLY", num: 10})}>Multiply</button>
    </div>
  )
}

export default UseReducer