import { useState } from "react"

const Login = () => {

    const [conectado, setConectado] = useState(false)

    const handlerButton = (e) => {
        e.preventDefault()
        if(conectado === false){
          setConectado(true)
      
        } else {
          setConectado(false)
        }
        
    }

  return (
    <div>
        
        <h1>Usuario : {conectado ? 'Logout' : 'Login'}</h1>
        <button onClick={handlerButton}> {!conectado ? 'Login' : 'Logout'}</button>
    </div>
  )
}

export default Login

