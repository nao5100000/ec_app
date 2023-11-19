type Props = {
    title: string;
}

const IdeaDetailsTitle = ({ title }: Props) => {
    return <h3 className="text-2xl font-semibold mt-8 mb-8 text-center">{title}</h3>
}
export default IdeaDetailsTitle;