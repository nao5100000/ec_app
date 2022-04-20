type Props = {
    text: string
}

const MypageUserText = (props: Props) => {
    return (
        <dd>
            <p className="mb-5 pb-1.5 border-b">{props.text}</p>
        </dd>
    )
}
export default MypageUserText;