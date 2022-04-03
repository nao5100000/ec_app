import SearchDifficultyLowButton from "../../atoms/index/searchDifficultyLowButton";
import SearchTitle from "../../atoms/index/searchTitle";

const SearchDifficultyField = () => {
    return (
        <div>
            <SearchTitle text="難易度" />
            <ul>
                <SearchDifficultyLowButton />
            </ul>
        </div>
    )
}
export default SearchDifficultyField;