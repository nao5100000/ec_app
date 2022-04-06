import SearchTagButton from "../../atoms/search/searchTagButton"
import SearchTitle from "../../atoms/search/searchTitle"

const SearchTag = () => {
    return (
        <div>
            <SearchTitle text="タグで絞り込む" />
            <ul className="flex justify-start items-center">
                <li className="mr-5">
                    <SearchTagButton text="example01" />
                </li>
                <li className="mr-5">
                    <SearchTagButton text="example02" />
                </li>
                <li>
                    <SearchTagButton text="example03" />
                </li>
            </ul>
        </div>
    )
}

export default SearchTag;