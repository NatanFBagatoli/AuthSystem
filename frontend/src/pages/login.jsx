function Login({ onSwitch }) {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="p-12 bg-orange-300 rounded-2xl w-full max-w-md">
                <span className="flex justify-center items-center text-xl">Tela de Login</span>
                <form className="grid min-h-120 w-full">
                    <div className="row-start-2 flex flex-col gap-3">
                        <div className="flex flex-col gap-1 ">
                            <label>
                                Email
                            </label>
                            <input
                                type="email"
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
                                placeholder="your password"
                                className="outline-none p-2 border-2 rounded-2xl">
                            </input>
                        </div>
                    </div>
                    <button className="relative bottom-10 row-start-3 self-end w-full p-5 bg-sky-400 rounded-full cursor-pointer hover:bg-sky-500">
                        Login
                    </button>
                </form>
                <div className="flex justify-center items-center gap-1">
                    <span>Não possui uma conta?</span>
                    <button
                        type="button"
                        onClick={onSwitch}
                        className="text-blue-600 cursor-pointer hover:underline">Cadastre-se
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login