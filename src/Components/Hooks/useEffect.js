import { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(()=>{
        console.log("useEffect is called");
    }, [count]);
  return (
    <div>
        <h1>useEffect Demo</h1>
        <h3>Counter: {count}</h3>
        <button onClick={()=> setCount(count+1)}>Increment</button>
        <br/>
        <h2>Name is : {name}</h2>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}

export default UseEffect