import { useState } from 'react'
import { useNavigate } from 'react-router'
function Login({ onSwitch }) {
const navigate = useNavigate()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
function handleLogin(e) {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        .then((res) => {
            if (res.status === 200) {
                navigate('/home')
            }
        })
    }
    return (
        <div className="bg-cyan-800 min-h-screen flex justify-center items-center">
            <div className="p-12 bg-cyan-600 rounded-2xl w-full max-w-md">
                <span className="flex justify-center items-center text-xl">Tela de Login</span>
                <form onSubmit={handleLogin} className="grid min-h-120 w-full">
                    <div className="row-start-2 flex flex-col gap-3">
                        <div className="flex flex-col gap-1 ">
                            <label>
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="outline-none p-2 border-2 rounded-2xl">
                            </input>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label>
                                Senha
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="your password"
                                className="outline-none p-2 border-2 rounded-2xl">
                            </input>
                        </div>
                    </div>
                    <button type="submit" className="relative bottom-10 row-start-3 self-end w-full p-5 bg-sky-400 rounded-full cursor-pointer hover:bg-sky-500">
                        Login
                    </button>
                </form>
                <div className="flex justify-center items-center gap-1">
                    <span>Não possui uma conta?</span>
                    <button
                        type="button"
                        onClick={onSwitch}
                        className="text-blue-800 cursor-pointer hover:underline">Cadastre-se
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login