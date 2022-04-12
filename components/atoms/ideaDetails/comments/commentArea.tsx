type Props = {
    comment: string
}

const CommentArea = (props: Props) => {
    return <input className="before:block before:absolute before:content-['コメントをする']" value={props.comment} placeholder="コメントする" />
}
export default CommentArea;