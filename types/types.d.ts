export interface IdeaProps {
    id: string;
    title: string;
    details: string;
    goal: string;
    function: string;
    tag: string[];
    difficulty: string;
};

export interface IdeaProperty {
    idea:IdeaProps;
}

