import CardDifficultyHigh from "../../atoms/common/cardDifficultyHigh";
import CardFavorite from "../../atoms/index/cardFavorite";
import CardIdeaTitle from "../../atoms/index/cardIdeaTitle";
import CardIdeaUser from "../../atoms/common/cardIdeaUser";
import CardTime from "../../atoms/common/cardTIme";

const CardIdea = () => {
    return (
        <div className="bg-white p-8 shadow-md rounded-lg w-[48%] cursor-pointer hover:shadow-sm relative mb-8 delay-200">
            <CardIdeaTitle idea="タンを思いっきり食べたい。" />
            <CardDifficultyHigh />
            <div className="flex justify-between items-end">
                <CardIdeaUser username="おむすびころりん" position="アイデア" />
                <CardTime time="2022/04/01" />
            </div>
            <CardFavorite favorite={123} />
        </div>
    )
}
export default CardIdea;