const Login = () => {
    return (
        <>
            <div className="bg-[#f4f4f4] min-h-screen flex items-center">
                <div className="min-w-[400px] bg-white p-8 drop-shadow-lg mx-auto w-1/4 ">
                    <h2 className="text-2xl mb-[30px]">Login</h2>
                    <dl>
                        <dt className="mb-[10px]">E-mail</dt>
                        <dd className="mb-[30px]">
                            <input className="w-full border-b border-light-gray pb-1 focus:border-gradient-orange" />
                        </dd>
                        <dt className="mb-[10px]">Password</dt>
                        <dd className="mb-[40px]">
                            <input className="w-full border-b border-light-gray pb-1 focus:border-gradient-orange" />
                        </dd>
                    </dl>
                    <button className="bg-gradient-to-r from-gradient-red to-gradient-orange w-full text-white p-3 rounded-full">Enter</button>

                </div>
            </div>
        </>
    )
}

export default Login;