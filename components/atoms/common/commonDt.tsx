type Props = {
    text: string
}

const CommonDt = (props: Props) => {
    return (
        <dt className="mb-[10px] text-dark-gray text-sm">{props.text}</dt>
    )
}
export default CommonDt;