type Props = {
    text: string,
    value: string
}

const PositionRadioButton = (props: Props) => {
    return (
        <div className="w-[48%]">
            <input type="radio" name="position" id={props.value} value={props.value} className="hidden peer" />
            <label htmlFor={props.value} className="block rounded-3xl p-1.5 w-full text-gradient-red font-semibold shadow-sm text-center text-sm border border-gradient-red cursor-pointer peer-checked:bg-gradient-red peer-checked:text-white font-light">{props.text}</label>
        </div>
    )
}
export default PositionRadioButton;