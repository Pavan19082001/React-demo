import { useState, createContext } from 'react'
import Hello from './Hello';
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function UseContextDemo() {
    const [username, setusername] = useState("");
  return (
    <div>
        <h1>useContext Demo</h1>
        <AppContext.Provider value={{username, setusername}}>
            <Login />
            <User />
            <Hello />
        </AppContext.Provider>
    </div>
  )
}

export default UseContextDemo