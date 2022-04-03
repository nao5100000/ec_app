import LogoutButton from "../../atoms/header/logoutButton";
import MypageButton from "../../atoms/header/mypageButton";

const LoginButtonWrapper = () => {
    return (
        <div className="flex justify-end items-center">
            <LogoutButton />
            <MypageButton />
        </div>
    )
}

export default LoginButtonWrapper;