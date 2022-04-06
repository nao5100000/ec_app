type Props = {
    text: string
}

const SearchTitle = (props: Props) => {
    return <h3 className="text-dark-gray02 text-sm mb-3">{props.text}</h3>
}
export default SearchTitle;