import Link from "next/link";
import HeaderLogo from "../atoms/header/headerLogo";
import LoginButtonWraper from "../molecules/header/buttonWrapper";

const LoginHeader = () => {
    return (
        <header className="flex justify-center items-center h-20 bg-white fixed w-full shadow-md z-50 top-0">
            <div className="flex justify-between items-center w-11/12">
                <HeaderLogo />
                <LoginButtonWraper />
            </div>
        </header>
    )
}

export default LoginHeader;