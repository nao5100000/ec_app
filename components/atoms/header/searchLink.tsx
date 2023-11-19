import Link from "next/link";
import { BiSearchAlt } from "react-icons/bi";

const SearchLink = () => {
    return (
        <Link href="/search">
            <BiSearchAlt className="text-3xl mr-5 cursor-pointer" />
        </Link>
    )
}
export default SearchLink;