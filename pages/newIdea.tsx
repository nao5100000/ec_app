import { ReactElement } from "react";
import CommonDt from "../components/atoms/common/commonDt";
import SubmitButton from "../components/atoms/common/submitButton";
import IdeaTitle from "../components/atoms/newIdea/ideaTitle";
import ImageRegisterButton from "../components/atoms/newIdea/imageRegisterButton";
import MarkDown from "../components/atoms/newIdea/markDown";
import LoginLayout from "../components/templates/loginLayout";

const NewIdea = () => {
    return (
        <div className="bg-white max-w-2xl p-10 w-4/5 mx-auto shadow-md">
            <IdeaTitle />
            <dl>
                <CommonDt text="アイデアのタイトル" />
                <dd className="mb-[30px]">
                    <input type="text" className="w-full border rounded p-4 text-lg shadow-inner h-12" />
                </dd>
                <CommonDt text="アイデアの詳細" />
                <dd className="mb-[30px]">
                    <MarkDown />
                </dd>
            </dl>
            <ImageRegisterButton />
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