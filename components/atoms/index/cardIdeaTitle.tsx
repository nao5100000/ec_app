import { VFC } from "react";

type Props = {
    title: string
}

const CardIdeaTitle: VFC<Props> = (props) => {
    return <h3 className="font-semibold text-xl pb-1.5 mb-5 border-b">{props.title}</h3>
}
export default CardIdeaTitle;