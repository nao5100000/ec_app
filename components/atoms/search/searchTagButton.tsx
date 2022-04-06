import { BsFillTagFill } from "react-icons/bs";

type Props = {
    text: string
}

const SearchTagButton = (props: Props) => {
    return <button className="bg-light-gray02 flex justify-center items-center text-xs p-1.5 rounded-sm hover:underline"><BsFillTagFill className="mr-1" />{props.text}</button>
}
export default SearchTagButton;