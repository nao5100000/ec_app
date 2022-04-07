import { BsHeart } from "react-icons/bs";


type Props = {
    favorite: number
}
const CardFavorite = (props: Props) => {
    return (
        <div className="flex jutify-center items-center absolute top-[20px] right-[20px]">
            <BsHeart className="text-dark-gray03 mr-1" />
            <p className="text-dark-gray03 text-xs font-light">{props.favorite}</p>
        </div>
    )
}
export default CardFavorite;