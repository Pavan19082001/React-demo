import { useContext } from 'react'
import { AppContext } from './useContextDemo'

function Login() {
    const {setusername} = useContext(AppContext);

  return (
    <div>
        <label>Enter UserName</label>
        <input type="text" onChange={(e)=> setusername(e.target.value)} />
    </div>
  )
}

export default Login