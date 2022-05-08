import { useContext } from 'react'
import { AppContext } from './useContextDemo'

function Hello() {
    const {username} = useContext(AppContext);
  return (
    <div>
        <h2>Hello, {username}</h2>
    </div>
  )
}

export default Hello