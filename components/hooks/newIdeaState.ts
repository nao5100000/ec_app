import { atom } from 'recoil';

export const newIdeaState = atom({
    key: "newIdea",
    default: [],
  })