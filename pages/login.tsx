import Link from 'next/link';
import CommonDt from '../components/atoms/common/commonDt';
import CommonH2 from '../components/atoms/common/commonH2';
import SubmitButton from '../components/atoms/common/submitButton';
import Layout from '../components/templates/layout';
import { useState } from 'react';
import { useLogin } from '../components/hooks/useLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, login } = useLogin();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        login(email, password)
    }

    return (
        <>
            <div className="flex items-center">
                <div className="min-w-[400px] bg-white p-8 drop-shadow-lg mx-auto w-1/4 rounded-md">
                    <CommonH2 text="Login" />
                    <form onSubmit={handleSubmit}>
                        <dl>
                            <CommonDt text="E-mail" />
                            <dd className="mb-[30px]">
                                <input className="w-full border-b border-light-gray pb-1 focus:border-gradient-orange" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </dd>
                            <CommonDt text="Password" />
                            <dd className="mb-[40px]">
                                <input className="w-full border-b border-light-gray pb-1 focus:border-gradient-orange" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </dd>
                        </dl>
                        <SubmitButton text="Enter" />
                        {error && <p>{error}</p>}
                    </form>
                    <Link href="/register/">
                        <a className="text-gradient-red text-sm text-center block underline hover:text-gradient-orange">新規会員登録はこちら</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
Login.getLayout = function getLayout(page: any) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Login;