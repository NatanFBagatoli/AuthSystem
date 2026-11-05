import { useState } from 'react'

function Register({ onSwitch }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleRegister(e) {
        e.preventDefault()
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
    }
    return (
        <div className="bg-stone-800 min-h-screen flex justify-center items-center">
            <div className="p-12 bg-stone-600 border-stone-600 border-2 rounded-2xl w-full max-w-md">
                <span className="flex justify-center items-center text-3xl text-white">Tela de Cadastro</span>
                <form onSubmit={handleRegister} className="grid min-h-120 w-full">
                    <div className="row-start-2 flex flex-col gap-3">
                        <div className="text-white flex flex-col gap-1 ">
                            <label>
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="outline-none p-2 border-2 rounded-2xl">
                            </input>
                        </div>
                        <div className="text-white flex flex-col gap-1">
                            <label>
                                Senha
                            </label>
                            <input
                                type="password"
                                placeholder="your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="outline-none p-2 border-2 rounded-2xl">
                            </input>
                        </div>
                    </div>
                    <button className="text-white relative bottom-10 row-start-3 self-end w-full p-5 bg-stone-500 border-2 border-stone-700 rounded-full cursor-pointer hover:bg-stone-700">
                        Register
                    </button>
                </form>
                <div className="text-white flex justify-center items-center gap-1">
                    <span>Já possui uma conta?</span>
                    <button
                        type="button"
                        onClick={onSwitch}
                        className="font-bold underline hover:text-blue-400 cursor-pointer ">Entrar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register