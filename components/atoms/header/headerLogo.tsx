import Link from "next/link";

const HeaderLogo = () => {
    return (
        <Link href="/">
            <h1 className="text-gradient-red font-bold text-3xl cursor-pointer">Idea Match</h1>
        </Link>
    )
}
export default HeaderLogo;