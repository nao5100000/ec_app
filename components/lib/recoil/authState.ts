import { atom } from 'recoil';
import { IdeaProps } from '../../../types/types';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist()
const initialIdea:IdeaProps[] = []

export const authState = atom({
    key: "auth",
    default: initialIdea,
    effects_UNSTABLE: [persistAtom]
  })