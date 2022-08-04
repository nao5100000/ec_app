import { useRecoilState } from "recoil";
import { userState } from "../lib/recoil/userState";
import { auth } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export const useAuthentication = () => {
  const [user, setUser] = useRecoilState(userState)
  useEffect(() => {
    if (user !== null) {
      return
    }
    onAuthStateChanged(auth, function (firebaseUser) {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          isAnonymous: firebaseUser.isAnonymous,
        })
      } else {
        // User is signed out.
        setUser(null)
      }
    })
  }, [user])

  return { user }
}