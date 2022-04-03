type Props = {
    text: string
}

const SubmitButton = (props: Props) => {
    return <button className="bg-gradient-to-r from-gradient-red to-gradient-orange w-full text-white p-3 rounded-full bg-[length:180%_auto] ease-out duration-300 hover:bg-[length:100%_auto] mb-5 max-w-[250px] block mx-auto shadow-md">{props.text}</button>
}

export default SubmitButton;