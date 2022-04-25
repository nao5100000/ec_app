import CardDifficultyHigh from '../../components/atoms/common/cardDifficultyHigh';
import CardIdeaUser from '../../components/atoms/common/cardIdeaUser';
import CardTime from '../../components/atoms/common/cardTIme';
import FavoriteButton from '../../components/atoms/common/favoriteButton';
import IdeaDetailsDt from '../../components/atoms/ideaDetails/ideaDetailsDt';
import IdeaDetailsFavorite from '../../components/atoms/ideaDetails/ideaDetailsFavorite';
import IdeaDetailsPreview from '../../components/atoms/ideaDetails/ideaDetailsPreview';
import IdeaDetailsTag from '../../components/atoms/ideaDetails/ideaDetailsTag';
import IdeaDetailsTitle from '../../components/atoms/ideaDetails/ideaDetailsTitle';
import CommentBox from '../../components/molecules/ideaDetails/commentBox';
import Layout from '../../components/templates/layout';
import { useRouter } from 'next/router';
import { newIdeaState } from '../../components/hooks/recoil/newIdeaState';
import { useRecoilValue } from 'recoil';
import { IdeaProperty } from '../../types/types';
import { useState, useEffect } from 'react';


const IdeaDetails = () => {
    const router = useRouter();
    const targetId = router.query.id;
    const ideas = useRecoilValue(newIdeaState);

    console.log(targetId)
    const [targetIdea, setTargetIdea] = useState({})
    useEffect(() => {
        if (!router.isReady) {
            return
        }
        const res = ideas.find(
            (idea: any) => idea.id === targetId
        )
        setTargetIdea(res);
        console.log(ideas)
    }, []);
    return (
        <>
            {targetIdea && <IdeaDetailsTitle title={targetIdea.title} />}
            <div className="bg-white max-w-2xl p-10 w-4/5 mx-auto shadow-md rounded-md mb-10">
                <div className="flex justify-start items-center">
                    <CardDifficultyHigh />
                    <IdeaDetailsFavorite favorite={89} />
                </div>
                <ul className="mb-8">
                    <li className="inline-block">
                        <IdeaDetailsTag text="example01" />
                    </li>
                </ul>
                <dl className="mb-8">
                    <IdeaDetailsDt text="アイデアの詳細(背景やストーリー)" />
                    <dd className="mb-8">
                        <IdeaDetailsPreview text="preview" />
                    </dd>
                    <IdeaDetailsDt text="目標とするもの（どうなってほしいか）" />
                    <dd className="mb-8">
                        <IdeaDetailsPreview text="親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）" />
                    </dd>
                    <IdeaDetailsDt text="メイン機能" />
                    <dd className="mb-8">
                        <IdeaDetailsPreview text="つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。（Wikipediaより）" />
                    </dd>
                </dl>
                <FavoriteButton />
                <div className="flex justify-between items-center">
                    <CardIdeaUser username="花子ありがとう" position="アイデア" />
                    <CardTime time="2022.04.01" />
                </div>
            </div>
            <CommentBox />
        </>
    )
}
IdeaDetails.getLayout = function getLayout(page: any) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default IdeaDetails;