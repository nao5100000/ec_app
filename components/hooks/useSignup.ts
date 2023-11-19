import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../../firebase/config';
import { collection, addDoc } from "firebase/firestore";
import { userState } from '../lib/recoil/userState';
import { useRecoilState } from 'recoil';
import { updateProfile } from 'firebase/auth';

export const useSignup =()=>{
    const [error,setError]=useState(null);
    const ref = collection(db, 'user');
    const router = useRouter();

    const [user,setUser]=useRecoilState(userState)
    const userAdd =async(email:string,password:string,username:string)=>{
        await addDoc(ref, {
            name: username,
            email: email,
            password: password,
        })
    }
    const signup =async(email:string,password:string,username:string)=>{
        setError(null)

        createUserWithEmailAndPassword(auth,email,password)
            .then((res)=>{
                console.log('user signed up',res.user)
                router.push('/')
                userAdd(email,password,username);

                let newUser = {
                    name:username,
                    email,
                    password
                }
                setUser(newUser);

            })
            .catch((err)=>{
                setError(err.message)
            })
    }

    return { error,signup}
}
