//React (porta 5173)  →  Express (porta 3000)  →  MongoDB (banco authsystem)
//   telas + fetch          rotas + regras           guarda os usuários

import { useState } from 'react'
import { useNavigate } from 'react-router'

function Home() {
    const navigate = useNavigate()
    const [modal, setModal] = useState(null)
    const [currentEmail, setCurrentEmail] = useState(localStorage.getItem('email'))
    const [newPassword, setNewPassword] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const token = localStorage.getItem('token')

    const authHeaders = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    }

    function changeEmail() {
        fetch('http://localhost:3000/user', {
            method: 'PUT',
            headers: authHeaders,
            body: JSON.stringify({ newEmail })
        })
            .then((res) => {
                if (res.ok) {
                    const updated = newEmail.trim().toLowerCase()
                    localStorage.setItem('email', updated)
                    setCurrentEmail(updated)
                    setNewEmail('')
                    setModal(null)
                }
            })
    }
    function changePassword() {
        fetch('http://localhost:3000/user/password', {
            method: 'PUT',
            headers: authHeaders,
            body: JSON.stringify({ newPassword })
        })
            .then((res) => {
                if (res.ok) {
                    setNewPassword('')
                    setModal(null)
                }
            })
    }

    function deleteAccount() {
        fetch('http://localhost:3000/user', {
            method: 'DELETE',
            headers: authHeaders
        })
            .then((res) => {
                if (res.ok) {
                    localStorage.clear()
                    navigate('/')   
                }
            })
    }

    return (
        <div className="bg-stone-800 min-h-screen flex justify-center items-center ">
            <div className="p-12 bg-stone-600 rounded-2xl w-full max-w-3xl text-white shadow-2xl">
                <div className="flex justify-center items-center text-xl">Minha Conta</div>
                <form className="bg-stone-500 space-y-6 rounded-2xl p-10 ">
                    <div className="flex justify-between items-center gap-10">
                        <div><h2>Endereço de Email</h2>
                        </div>
                        <button type="button" onClick={() => setModal('email')} className="bg-yellow-600 rounded-2xl hover:bg-yellow-700 px-5 py-2">Alterar Email</button>
                    </div>
                    <div className="flex justify-between items-center gap-10">
                        <div>Senha</div>
                        <button type="button" onClick={() => setModal('senha')} className="bg-yellow-600 rounded-2xl hover:bg-yellow-700 px-5 py-2">Alterar Senha</button>
                    </div>
                    <div className="flex justify-between items-center gap-10">
                        <div>Conta</div>
                        <button type="button" onClick={() => setModal('conta')} className="bg-red-700 rounded-2xl hover:bg-red-800 px-5 py-2">Deletar Conta</button>
                    </div>
                </form>
            </div>
            {modal === 'email' && (
                <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
                    <div className="bg-stone-700 p-10 w-full max-w-md rounded-2xl text-white space-y-5">
                        <h2 className="text-2xl font-bold">Endereço de Email</h2>
                        <p className="text-lime-300">{currentEmail}</p>
                        <h2 className="text-xl">Editar Email</h2>
                        <p>Informe seu novo email</p>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            className="outline-none p-2 w-full border-2 rounded-2xl">
                        </input>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setModal(null)}
                                className="bg-stone-600 hover:bg-stone-800 px-5 py-2 rounded-xl">
                                Cancelar
                            </button>
                            <button
                                onClick={changeEmail}
                                className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-xl">
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {modal === 'senha' && (
                <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
                    <div className="bg-stone-700 p-10 w-full max-w-md rounded-2xl text-white space-y-5">
                        <h2 className="text-xl">Editar Senha</h2>
                        <p>Informe sua nova senha</p>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="your password"
                            className="outline-none p-2 border-2 w-full rounded-2xl">
                        </input>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setModal(null)}
                                className="bg-stone-600 hover:bg-stone-800 px-5 py-2 rounded-xl">
                                Cancelar
                            </button>
                            <button
                                onClick={changePassword}
                                className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-xl">
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {modal === 'conta' && (
                <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
                    <div className="bg-stone-700 p-10 rounded-2xl w-full max-w-md text-white space-y-5">
                        <h2 className="text-xl">Exclusão de conta</h2>
                        <p>Deseja realmente excluir sua conta?</p>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setModal(null)}
                                className="bg-stone-600 hover:bg-stone-800 px-5 py-2 rounded-xl">
                                Cancelar
                            </button>
                            <button
                                onClick={deleteAccount}
                                className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-xl">
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}
export default Home