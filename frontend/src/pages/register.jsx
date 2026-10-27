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
        <div className="min-h-screen flex justify-center items-center">
            <div className="p-12 bg-orange-300 rounded-2xl w-full max-w-md">
                <span className="flex justify-center items-center text-xl">Tela de Cadastro</span>
                <form onSubmit={handleRegister} className="grid min-h-120 w-full">
                    <div className="row-start-2 flex flex-col gap-3">
                        <div className="flex flex-col gap-1 ">
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
                        <div className="flex flex-col gap-1">
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
                    <button className="relative bottom-10 row-start-3 self-end w-full p-5 bg-orange-400 rounded-full cursor-pointer hover:bg-orange-500">
                        Register
                    </button>
                </form>
                <div className="flex justify-center items-center gap-1">
                    <span>Já possui uma conta?</span>
                    <button
                        type="button"
                        onClick={onSwitch}
                        className="text-orange-800 cursor-pointer hover:underline">Entrar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register