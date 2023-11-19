const SearchDifficultyLowButton = () => {
    return (
        <li className="mr-2.5">
            {/* <button className="block rounded-3xl p-1.5 w-32 text-gradient-orange font-semibold shadow-sm text-center text-sm border border-gradient-orange cursor-pointer hover:bg-gradient-orange hover:text-white font-light">低い</button> */}
            <input type="checkbox" className="hidden peer" id="low" name="low" />
            <label htmlFor="low" className="block rounded-3xl p-1.5 w-32 text-gradient-orange font-semibold shadow-sm text-center text-sm border border-gradient-orange cursor-pointer peer-checked:bg-gradient-orange peer-checked:text-white font-light">低い</label>
        </li>
    )
}
export default SearchDifficultyLowButton;