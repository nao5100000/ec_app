import { Input } from '@chakra-ui/react'

const Login = () => {
    return (
        <>
            <div className="bg-[#f4f4f4] min-h-screen flex items-center">
                <div className="max-w-2xl bg-white p-8 drop-shadow-md">
                    <dl className="">
                        <dt>E-mail</dt>
                        <dd>
                            <Input />
                        </dd>
                        <dt>Password</dt>
                        <dd>
                            <Input />
                        </dd>
                    </dl>
                    <button >Login</button>

                </div>
            </div>
        </>
    )
}

export default Login;