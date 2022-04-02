import LoginButton from "../../atoms/header/loginButton";
import RegisterButton from "../../atoms/header/registerButton";

const ButtonWraper = () => {
    return (
        <div className="flex justify-end items-center">
            <RegisterButton />
            <LoginButton />
        </div>
    )
}

export default ButtonWraper;