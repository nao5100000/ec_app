import { BsHeart } from "react-icons/bs";

const FavoriteButton = () => {
    return (
        <button className="block border rounded-full ml-[auto] w-10 h-10 flex justify-center items-center shadow-md mb-8">
            <BsHeart className="text-dark-gray02" />
        </button>
    )
}
export default FavoriteButton;