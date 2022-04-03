import DifficultyRadioHigh from "../../atoms/newIdea/difficultyRadioHigh";
import DifficultyRadioLow from "../../atoms/newIdea/difficultyRadioLow";
import DifficultyRadioMiddle from "../../atoms/newIdea/difficultyRadioMiddle";

const DifficultyRadioWrapper = () => {
    return (
        <dd className="flex justify-start align-center mb-16">
            <DifficultyRadioLow />
            <DifficultyRadioMiddle />
            <DifficultyRadioHigh />
        </dd>
    )
}

export default DifficultyRadioWrapper;