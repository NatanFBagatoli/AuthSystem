import { useState } from 'react'
import Login from './login'
import Register from './register'

function Auth() {
    const [Registrado, setRegistrado] = useState(false)
    return (
        <div>
            {Registrado
                ? <Register onSwitch={() => setRegistrado(false)} />
                : <Login onSwitch={() => setRegistrado(true)} />
            }
        </div>
    )
}

export default Auth