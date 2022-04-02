import CommonDt from '../components/atoms/common/commonDt';
import CommonH2 from '../components/atoms/common/commonH2';
import SubmitButton from '../components/atoms/common/submitButton';
import Layout from '../components/templates/layout';

const Register = () => {
    return (
        <div className="min-w-[400px] w-1/4 bg-white p-10 drop-shadow-md mx-auto rounded-md">
            <CommonH2 text="新規会員登録" />
            <dl>
                <CommonDt text="おなまえ" />
                <dd className="mb-[30px]">
                    <input className="w-full border-b border-light-gray pb-1 focus:border-gradient-orange" />
                </dd>
                <CommonDt text="E-mail" />
                <dd className="mb-[30px]">
                    <input className="w-full border-b border-light-gray pb-1 focus:border-gradient-orange" />
                </dd>
                <CommonDt text="Password" />
                <dd className="mb-[60px]">
                    <input className="w-full border-b border-light-gray pb-1 focus:border-gradient-orange" />
                </dd>
            </dl>
            <SubmitButton text="Enter" />
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