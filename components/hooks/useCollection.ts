import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase/config';
import { useRecoilState } from 'recoil';
import { newIdeaState } from '../lib/recoil/newIdeaState';
import { IdeaProps } from '../../types/types';

export const useCollection = (c: any) => {
    const [ideas, setIdeas] = useRecoilState(newIdeaState);

    useEffect(() => {
        let ref = collection(db, c);
        const onsub = onSnapshot(ref, (snapshot) => {
            let results: any = [];
            snapshot.docs.forEach(doc => {
                results.push({ ...doc.data(), id: doc.id })
            })
            setIdeas(results);
        })
        return () => onsub();
    }, [c])
    return { ideas }
}