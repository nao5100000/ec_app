const DifficultyRadioHigh = () => {
    return (
        <div>
            <input type="radio" name="central" id="high" value="high" className="hidden peer" />
            <label htmlFor="high" className="block rounded-3xl p-1.5 w-32 text-gradient-red font-semibold shadow-sm text-center text-sm border border-gradient-red cursor-pointer peer-checked:bg-gradient-red peer-checked:text-white font-light">難しい</label>
        </div>
    )
}
export default DifficultyRadioHigh;