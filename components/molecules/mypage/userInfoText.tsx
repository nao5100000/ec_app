import CommonDt from "../../atoms/common/commonDt";
import MypageUserText from "../../atoms/mypage/mypageUserText";
import { userState } from "../../lib/recoil/userState";
import { useRecoilValue } from "recoil";

const UserInfoText = () => {
    const user = useRecoilValue(userState);
    console.log(user)
    return (
        <dl>
            <CommonDt text="おなまえ" />
            <MypageUserText text={user} />
            {/* <input type="text"  className="w-full border-b border-light-gray pb-1 focus:border-gradient-orange"/> */}
            <CommonDt text="E-mail" />
            <MypageUserText text="xxxxxxx@gmail.jp" />
            <CommonDt text="Password" />
            <MypageUserText text="xxxxxxx" />
            <CommonDt text="ポジション" />
            <MypageUserText text="アイデア" />
        </dl>
    )
}
export default UserInfoText;