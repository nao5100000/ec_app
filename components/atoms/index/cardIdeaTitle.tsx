type Props = {
    idea: string
}

const CardIdeaTitle = (props: Props) => {
    return <h3 className="font-semibold text-lg">{props.idea}</h3>
}
export default CardIdeaTitle;