type Props = {
    time: string
}

const CardTime = (props: Props) => {
    return (
        <span className="text-xs text-dark-gray03 font-light">{props.time}</span>
    )
}
export default CardTime;