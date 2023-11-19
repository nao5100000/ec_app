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
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
// import { timeStamp } from "console";

const MDEditor = dynamic(
    () => import("@uiw/react-md-editor"),
    { ssr: false }
);

const NewIdea = () => {
    const [selected, setSelected] = useState(['']);
    const [newTitle, setNewTitle] = useState('');
    const [newDetails, setNewDetails] = useState<string | undefined>('');
    const [newGoal, setNewGoal] = useState<string | undefined>('');
    const [kinou, setKinou] = useState<string | undefined>('');


    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const ref = collection(db, 'ideas');
        await addDoc(ref, {
            id: timeStamp,
            title: newTitle,
            details: newDetails,
            doal: newGoal,
            function: kinou,
        })
    }
    return (
        <div className="bg-white max-w-2xl p-10 w-4/5 mx-auto shadow-md rounded-md">
            <form onSubmit={handleSubmit}>
                <label>
                    <IdeaTitle />
                    <dl>
                        <CommonDt text="アイデアのタイトル" />
                        <dd className="mb-12">
                            <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="w-full border rounded p-4 text-lg shadow-inner h-12" />
                        </dd>
                        <CommonDt text="アイデアの詳細(背景やストーリー)" />
                        <dd className="mb-12">
                            <MDEditor value={newDetails} onChange={setNewDetails} />
                        </dd>
                        <CommonDt text="目標とするもの（どうなってほしいか）" />
                        <dd className="mb-12">
                            <MDEditor value={newGoal} onChange={setNewGoal} />
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
                </label>
                <SubmitButton text="投稿してみる" />
            </form>
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