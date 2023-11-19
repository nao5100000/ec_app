type Props = {
    comment: string
}

const CommentArea = (props: Props) => {
    return <textarea className="before:block before:absolute before:content-['コメントをする'] w-full borde-b text-sm p-2.5	mb-2.5 rounded-sm shadow-inner border" placeholder="コメントする" >{props.comment}</textarea>
}
export default CommentArea;