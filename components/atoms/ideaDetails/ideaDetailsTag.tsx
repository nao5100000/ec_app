import { BsFillTagFill } from "react-icons/bs";

type Props = {
    text: string
}

const IdeaDetailsTag = (props: Props) => {
    return <span className="bg-light-gray02 flex justify-center items-center text-xs p-1.5 rounded-sm hover:underline"><BsFillTagFill className="mr-1" />{props.text}</span>
}
export default IdeaDetailsTag;