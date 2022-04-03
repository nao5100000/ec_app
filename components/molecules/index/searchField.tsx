import SearchButton from "../../atoms/index/searchButton"
import SearchInput from "../../atoms/index/searchInput"

const SearchField = () => {
    return (
        <div className="flex jutify-center items-stretch">
            <SearchInput />
            <SearchButton />
        </div>
    )
}
export default SearchField;