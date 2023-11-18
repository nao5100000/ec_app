import RegisterButton from "../../atoms/header/registerButton";

const ButtonWraper = () => {
    return (
        <div className="flex justify-end items-center">
            <RegisterButton text='新規会員登録' href='/register' />
            <RegisterButton text='ログイン' href='/login' />
        </div>
    )
}

export default ButtonWraper;