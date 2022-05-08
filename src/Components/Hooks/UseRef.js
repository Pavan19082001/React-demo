import { useRef } from 'react'

function UseRef() {
    const inputref = useRef(null);

    let focusInput = () => {
        console.log(inputref.current.value);
        inputref.current.focus();
    }
  return (
    <div>
        <label>Enter Name</label>
        <input type="text" ref={inputref} />
        <button onClick={()=>focusInput()}>Focus input</button>
    </div>
  )
}

export default UseRef