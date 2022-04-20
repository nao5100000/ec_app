import MypageIcon from "../../atoms/mypage/mypageIcon";
import UserInfoText from "../../molecules/mypage/userInfoText";

const UserInfoBlock = () => {
    return (
        <div className="p-8 rounded-md w-4/5 relative shadow-lg bg-white">
            <MypageIcon />
            <UserInfoText />
        </div>
    )
}
export default UserInfoBlock;