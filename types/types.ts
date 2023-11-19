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
    idea: IdeaProps;
}

export interface UserProps {
    name:string;
    email:string;
    password:string;
    position:string;
}