type Props = {
    idea: string
}

const CardIdeaTitle = (props: Props) => {
    return <h3 className="font-semibold text-xl pb-1.5 mb-5 border-b">{props.idea}</h3>
}
export default CardIdeaTitle;