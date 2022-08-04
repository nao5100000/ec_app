import CommonDt from '../components/atoms/common/commonDt';
import CommonH2 from '../components/atoms/common/commonH2';
import SubmitButton from '../components/atoms/common/submitButton';
import PositionRadioButton from '../components/atoms/login/positionRadioButton';
import Layout from '../components/templates/layout';
import { useState } from 'react';
import { useSignup } from '../components/hooks/useSignup';
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const { error, signup } = useSignup();
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        signup(email, password, username)

        // const ref = collection(db, 'user');

        // await addDoc(ref, {
        //     name: username,
        //     email: email,
        //     password: password,
        // })
    }
    return (
        <div className="min-w-[400px] w-1/4 bg-white p-10 drop-shadow-md mx-auto rounded-md">
            <CommonH2 text="新規会員登録" />
            <form onSubmit={handleSubmit}>
                <dl>
                    <CommonDt text="おなまえ" />
                    <dd className="mb-[30px]">
                        <input className="w-full border-b border-light-gray pb-1 focus:border-gradient-orange" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </dd>
                    <CommonDt text="E-mail" />
                    <dd className="mb-[30px]">
                        <input className="w-full border-b border-light-gray pb-1 focus:border-gradient-orange" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </dd>
                    <CommonDt text="Password" />
                    <dd className="mb-[30px]">
                        <input className="w-full border-b border-light-gray pb-1 focus:border-gradient-orange" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </dd>
                    <CommonDt text="ポジション" />
                    <dd className="flex justify-between align-center mb-[60px]">
                        <PositionRadioButton text="アイデア提案" value="idea" />
                        <PositionRadioButton text="エンジニア" value="engineer" />
                    </dd>
                </dl>
                <SubmitButton text="Enter" />
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}
Register.getLayout = function getLayout(page: any) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Register;