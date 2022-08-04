import { collection,  onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase/config';
import { useRecoilState } from 'recoil';
import { userState } from '../lib/recoil/userState';

export const useUserCollection =(c:any)=>{
    const [user, setUser] = useRecoilState(userState);

    useEffect(()=>{
        let ref = collection(db,c);
        const onsub = onSnapshot(ref,(snapshot)=>{
            let results:any = [];
            snapshot.docs.forEach(doc =>{
                results.push({...doc.data(),id:doc.id})
            })
            setUser(results)
        })

        return ()=>onsub()
    },[c])
    return {user}
}