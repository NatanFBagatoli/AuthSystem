import { useState } from 'react'

function Home() {
    const [modal, setModal] = useState(null)
    return (
        <div className="bg-emerald-950 min-h-screen flex justify-center items-center ">
            <div className="p-12 bg-emerald-900 rounded-2xl w-full max-w-3xl text-white shadow-2xl">
                <div className="flex justify-center items-center text-xl">Minha Conta</div>
                <form className="bg-emerald-800 space-y-6 rounded-2xl p-10 ">
                    <div className="flex justify-between items-center gap-10">
                        <div><h2>Endereço de Email</h2>
                        </div>
                        <button type="button" onClick={() => setModal('email')} className="bg-red-600 rounded-2xl hover:bg-red-700 px-5 py-2">Alterar Email</button>
                    </div>
                    <div className="flex justify-between items-center gap-10">
                        <div>Senha</div>
                        <button type="button" onClick={() => setModal('senha')} className="bg-red-600 rounded-2xl hover:bg-red-700 px-5 py-2">Alterar Senha</button>
                    </div>
                    <div className="flex justify-between items-center gap-10">
                        <div>Conta</div>
                        <button type="button" onClick={() => setModal('conta')} className="bg-red-600 rounded-2xl hover:bg-red-700 px-5 py-2">Deletar Conta</button>
                    </div>
                </form>
            </div>
            {modal === 'email' && (
                <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
                    <div className="bg-emerald-900 p-10 w-full max-w-md rounded-2xl text-white space-y-5">
                        <h2 className="text-xl">Editar Email</h2>
                        <p>Informe seu novo email</p>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="outline-none p-2 w-full border-2 rounded-2xl">
                        </input>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setModal(null)}
                                className="bg-gray-600 hover:bg-gray-700 px-5 py-2 rounded-xl">
                                Cancelar
                            </button>
                            <button
                                onClick={() => setModal(null)}
                                className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl">
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {modal === 'senha' && (
                <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
                    <div className="bg-emerald-900 p-10 w-full max-w-md rounded-2xl text-white space-y-5">
                        <h2 className="text-xl">Editar Senha</h2>
                        <p>Informe sua nova senha</p>
                        <input
                            type="password"
                            placeholder="your password"
                            className="outline-none p-2 border-2 w-full rounded-2xl">
                        </input>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setModal(null)}
                                className="bg-gray-600 hover:bg-gray-700 px-5 py-2 rounded-xl">
                                Cancelar
                            </button>
                            <button
                                onClick={() => setModal(null)}
                                className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl">
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {modal === 'conta' && (
                <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
                    <div className="bg-emerald-900 p-10 rounded-2xl w-full max-w-md text-white space-y-5">
                        <h2 className="text-xl">Exclusão de conta</h2>
                        <p>Deseja realmente excluir sua conta?</p>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setModal(null)}
                                className="bg-gray-600 hover:bg-gray-700 px-5 py-2 rounded-xl">
                                Cancelar
                            </button>
                            <button
                                onClick={() => setModal(null)}
                                className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl">
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