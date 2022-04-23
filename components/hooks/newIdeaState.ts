import { atom } from 'recoil';
import { IdeaProps } from '../../types/types';

const initialIdea:IdeaProps[] = []

export const newIdeaState = atom({
    key: "newIdea",
    default: initialIdea,
  })