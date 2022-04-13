import { ReactElement } from "react";
import LoginLayout from "../components/templates/loginLayout";
import UserInfoBlock from "../components/organisms/mypage/userInfoBlock";

const MyPage = () => {
    return (
        <>
            <div className="w-[30%] bg-gradient-to-r from-[#09203f] to-[#537895] min-h-screen absolute top-0 flex justify-center items-center  shadow-lg">
                <UserInfoBlock />
            </div>
        </>
    )
}
MyPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <LoginLayout >
            {page}
        </LoginLayout>
    )
}
export default MyPage;