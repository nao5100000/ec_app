import SearchButton from "../../atoms/search/searchButton"
import SearchInput from "../../atoms/search/searchInput"
import SearchTitle from "../../atoms/search/searchTitle"

const SearchKeyword = () => {
    return (
        <div className="mb-8">
            <SearchTitle text="キーワードで絞り込む" />
            <div className="flex jutify-center items-stretch">
                <SearchInput />
                <SearchButton />
            </div>
        </div>
    )
}
export default SearchKeyword;