const SearchDifficultyMiddleButton = () => {
    return (
        <li className="mr-2.5">
            {/* <button className="block rounded-3xl p-1.5 w-32 text-gradient-red-orange font-semibold shadow-sm text-center text-sm border border-gradient-red-orange cursor-pointer hover:bg-gradient-red-orange hover:text-white font-light">普通</button> */}
            <input type="checkbox" className="hidden peer" id="middle" name="middle" />
            <label htmlFor="middle" className="block rounded-3xl p-1.5 w-32 text-gradient-red-orange font-semibold shadow-sm text-center text-sm border border-gradient-red-orange cursor-pointer peer-checked:bg-gradient-red-orange peer-checked:text-white font-light">普通</label>
        </li>
    )
}
export default SearchDifficultyMiddleButton;