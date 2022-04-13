import CommonDt from "../../atoms/common/commonDt";
import MypageUserText from "../../atoms/mypage/mypageUserText";

const UserInfoText = () => {
    return (
        <dl>
            <CommonDt text="おなまえ" />
            <MypageUserText text="山田 花子" />
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