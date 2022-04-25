import { ReactElement, useState } from "react";
import CommonDt from "../components/atoms/common/commonDt";
import SubmitButton from "../components/atoms/common/submitButton";
import IdeaTitle from "../components/atoms/newIdea/ideaTitle";
import ImageRegisterButton from "../components/atoms/newIdea/imageRegisterButton";
import DifficultyRadioWrapper from "../components/molecules/newIdea/difficultyRadioWrapper";
import LoginLayout from "../components/templates/loginLayout";
import { TagsInput } from "react-tag-input-component";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";


const MDEditor = dynamic(
    () => import("@uiw/react-md-editor"),
    { ssr: false }
);

const NewIdea = () => {
    const [selected, setSelected] = useState(['']);
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [goal, setGoal] = useState('');

    const [kinou, setKinou] = useState('')
    return (
        <div className="bg-white max-w-2xl p-10 w-4/5 mx-auto shadow-md rounded-md">
            <IdeaTitle />
            <dl>
                <CommonDt text="アイデアのタイトル" />
                <dd className="mb-12">
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border rounded p-4 text-lg shadow-inner h-12" />
                </dd>
                <CommonDt text="アイデアの詳細(背景やストーリー)" />
                <dd className="mb-12">
                    <MDEditor value={details} onChange={setDetails} />
                </dd>
                <CommonDt text="目標とするもの（どうなってほしいか）" />
                <dd className="mb-12">
                    <MDEditor value={goal} onChange={setGoal} />
                </dd>
                <CommonDt text="メイン機能" />
                <dd className="mb-12">
                    <MDEditor value={kinou} onChange={setKinou} />
                </dd>
                <CommonDt text="画像投稿" />
                <dd className="mb-12">
                    <ImageRegisterButton />
                </dd>
                <CommonDt text="関連タグ" />
                <dd className="mb-12">
                    <TagsInput
                        value={selected}
                        onChange={setSelected}
                        name="tags"
                        placeHolder="tags"
                    />
                </dd>
                <CommonDt text="想定される難易度" />
                <DifficultyRadioWrapper />
            </dl>
            <SubmitButton text="投稿してみる" />
        </div>
    )
}

NewIdea.getLayout = function getLayout(page: ReactElement) {
    return (
        <LoginLayout >
            {page}
        </LoginLayout>
    )
}

export default NewIdea;