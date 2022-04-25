import Link from 'next/link';
import CardDifficultyHigh from "../../atoms/common/cardDifficultyHigh";
import CardFavorite from "../../atoms/index/cardFavorite";
import CardIdeaTitle from "../../atoms/index/cardIdeaTitle";
import CardIdeaUser from "../../atoms/common/cardIdeaUser";
import CardTime from "../../atoms/common/cardTIme";
import { IdeaProperty } from "../../../types/types";
import { VFC } from "react";

const CardIdea: VFC<IdeaProperty> = ({ idea }) => {
    return (
        <Link href="/ideaDetails/[slug]" as={`/ideaDetails/${idea.id}`}>
            <div className="bg-white p-8 shadow-md rounded-lg w-[48%] cursor-pointer hover:shadow-sm relative mb-8 delay-200">
                <CardIdeaTitle title={idea.title} />
                <CardDifficultyHigh />
                <div className="flex justify-between items-end">
                    <CardIdeaUser username="おむすびころりん" position="アイデア" />
                    <CardTime time="2022/04/01" />
                </div>
                <CardFavorite favorite={123} />
            </div>
        </Link>
    )
}
export default CardIdea;