import SearchTag from "../../molecules/search/searchTag";
import SearchDifficultyField from "../../molecules/search/searchDiffifultyField"
import SearchKeyword from "../../molecules/search/searchKeyword"

const SearchField = () => {
    return (
        <div className="bg-white max-w-6xl w-4/5 p-10  mx-auto shadow-md rounded-md">
            <div className="mx-auto max-w-2xl w-full">
                <SearchKeyword />
                <SearchDifficultyField />
                <SearchTag />
            </div>
        </div>
    )
}

export default SearchField;