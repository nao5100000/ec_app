import CardDifficultyHigh from "../../atoms/index/cardDifficultyHigh";
import CardFavorite from "../../atoms/index/cardFavorite";
import CardIdeaTitle from "../../atoms/index/cardIdeaTitle";
import CardIdeaUser from "../../atoms/index/cardIdeaUser";
import CardTime from "../../atoms/index/cardTIme";

const CardIdea = () => {
    return (
        <div className="bg-white p-8 shadow-md rounded-lg w-[48%] cursor-pointer hover:shadow-sm relative mb-8 delay-200">
            <CardIdeaTitle idea="タンを思いっきり食べたい。" />
            <CardDifficultyHigh />
            <div className="flex justify-between items-start">
                <CardIdeaUser username="おむすびころりん" />
                <CardTime time="2022/04/01" />
            </div>
            <CardFavorite favorite={123} />
        </div>
    )
}
export default CardIdea;