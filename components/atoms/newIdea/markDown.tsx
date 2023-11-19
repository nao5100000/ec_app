import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

const MDEditor = dynamic(
    () => import("@uiw/react-md-editor"),
    { ssr: false }
);

type Props = {
    text: string;
    setText: any;
}

const MarkDown = ({ text }: Props) => {
    return (
        <>
            <MDEditor value={text} />
        </>
    );
}
export default MarkDown;