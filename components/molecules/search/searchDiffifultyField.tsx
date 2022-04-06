import SearchDifficultyHighButton from "../../atoms/search/searchDifficultyHighButton";
import SearchDifficultyLowButton from "../../atoms/search/searchDifficultyLowButton";
import SearchDifficultyMiddleButton from "../../atoms/search/searchDifficultyMiddleButton";
import SearchTitle from "../../atoms/search/searchTitle";

const SearchDifficultyField = () => {
    return (
        <div className="mb-8">
            <SearchTitle text="難易度で絞り込む" />
            <ul className="flex justify-start items-center">
                <SearchDifficultyLowButton />
                <SearchDifficultyMiddleButton />
                <SearchDifficultyHighButton />
            </ul>
        </div>
    )
}
export default SearchDifficultyField;