import { atom } from 'recoil';
import { IdeaProps } from '../../../types/types';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist()
const initialIdea:IdeaProps[] = []

export const newIdeaState = atom({
    key: "newIdea",
    default: initialIdea,
    effects_UNSTABLE: [persistAtom]
  })