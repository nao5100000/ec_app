const DifficultyRadioMiddle = () => {
    return (
        <div className="mr-2.5">
            <input type="radio" name="central" id="middle" value="middle" className="hidden peer" />
            <label htmlFor="middle" className="block rounded-3xl p-1.5 w-32 text-gradient-red-orange font-semibold shadow-sm text-center text-sm border border-gradient-red-orange cursor-pointer peer-checked:bg-gradient-red-orange peer-checked:text-white font-light">普通</label>
        </div>
    )
}
export default DifficultyRadioMiddle;