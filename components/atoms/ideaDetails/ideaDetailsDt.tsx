type Props = {
    text: string
}
const IdeaDetailsDt = (props: Props) => {
    return (
        <dt className="text-xl font-semibold border-b pb-1.5 mb-3.5">{props.text}</dt>
    )
}
export default IdeaDetailsDt;