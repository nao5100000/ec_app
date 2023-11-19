import { BsPersonFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Link from "next/link";

const MypageButton = () => {
    const router = useRouter();
    return (
        <Link href="/mypage/">
            <a className="flex items-center mr-4">
                My page
                <BsPersonFill className="abosolute" />
            </a>
        </Link>
    )
}

export default MypageButton;