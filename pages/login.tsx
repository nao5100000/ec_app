import Link from 'next/link'
import Header from '../components/organisms/header';
import Layout from '../components/templates/layout';

const Login = () => {
    return (
        <>
            <div className="bg-[#f4f4f4] min-h-screen flex items-center">
                <div className="min-w-[400px] bg-white p-8 drop-shadow-lg mx-auto w-1/4 ">
                    <h2 className="text-2xl mb-[30px]">Login</h2>
                    <dl>
                        <dt className="mb-[10px] text-dark-gray">E-mail</dt>
                        <dd className="mb-[30px]">
                            <input className="w-full border-b border-light-gray pb-1 focus:border-gradient-orange" />
                        </dd>
                        <dt className="mb-[10px] text-dark-gray">Password</dt>
                        <dd className="mb-[40px]">
                            <input className="w-full border-b border-light-gray pb-1 focus:border-gradient-orange" />
                        </dd>
                    </dl>
                    <button className="bg-gradient-to-r from-gradient-red to-gradient-orange w-full text-white p-3 rounded-full bg-[length:180%_auto] ease-out duration-300 hover:bg-[length:100%_auto] mb-5">Enter</button>
                    <Link href="/register/">
                        <a className="text-gradient-red text-sm text-center block underline">新規会員登録はこちら</a>
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