import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

const MarkdownPreview = dynamic(
    () => import("@uiw/react-markdown-preview"),
    { ssr: false }
);

type Props = {
    text: string
}
const IdeaDetailsPreview = (props: Props) => {
    return (
        <>
            <MarkdownPreview source={props.text} />
        </>
    )
}
export default IdeaDetailsPreview;