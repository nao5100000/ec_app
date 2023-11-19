import CommentArea from "../../atoms/ideaDetails/comments/commentArea";
import CommentButton from "../../atoms/ideaDetails/comments/commentButton";
import CommentCancelButton from "../../atoms/ideaDetails/comments/commentCancelButton";
import CommentTitle from "../../atoms/ideaDetails/comments/commentTitle";

const CommentBox = () => {
    return (
        <>
            <div className="max-w-2xl w-4/5 mx-auto">
                <CommentTitle />
                <div>
                    <div>
                        <CommentArea comment="" />
                        <div className="flex justify-end items-center">
                            <CommentCancelButton />
                            <CommentButton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CommentBox;