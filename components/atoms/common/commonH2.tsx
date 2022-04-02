type Props = {
    text: string
}

const CommonH2 = (props: Props) => {
    return <h2 className="text-2xl mb-[30px]">{props.text}</h2>
}
export default CommonH2;