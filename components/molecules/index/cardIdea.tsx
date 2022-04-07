import CardFavorite from "../../atoms/index/cardFavorite";
import CardIdeaTitle from "../../atoms/index/cardIdeaTitle";
import CardIdeaUser from "../../atoms/index/cardIdeaUser";

const CardIdea = () => {
    return (
        <div className="bg-white p-8 shadow-sm rounded-md w-[48%] cursor-pointer">
            <CardIdeaTitle idea="タンを思いっきり食べたい。" />
            <div>
                <CardIdeaUser username="おむすびころりん" />
                <CardFavorite favorite={123} />
            </div>
        </div>
    )
}
export default CardIdea;