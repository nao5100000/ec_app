import { useState } from 'react'
import { useRouter } from 'next/router';

import { auth } from '../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRecoilState } from 'recoil';
import { userState } from '../lib/recoil/userState';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [user, setUser] = useRecoilState(userState);
    const router = useRouter();

    const login = (email: string, password: string) => {
        setError(null);
        if (user !== null) {
            return
        }
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log('user logged in', res.user)
                router.push('/');
                setUser(res.user);
            })
            .catch((err) => {
                setError(err.message)
            })
    }
    return { error, login }
}