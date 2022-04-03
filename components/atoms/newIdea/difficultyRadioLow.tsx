const DifficultyRadioLow = () => {
    return (
        <div className="mr-2.5">
            <input type="radio" name="central" id="low" value="low" className="hidden peer" />
            <label htmlFor="low" className="block rounded-3xl p-1.5 w-32 text-gradient-orange font-semibold shadow-sm text-center text-sm border border-gradient-orange cursor-pointer peer-checked:bg-gradient-orange peer-checked:text-white font-light">易しい</label>
        </div>
    )
}
export default DifficultyRadioLow;