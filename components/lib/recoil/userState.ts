import { atom } from 'recoil';
import { UserProps } from '../../../types/types';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist()
const initialIdea:UserProps[] = []

export const userState = atom({
    key: "user",
    default: initialIdea,
    effects_UNSTABLE: [persistAtom]
  })