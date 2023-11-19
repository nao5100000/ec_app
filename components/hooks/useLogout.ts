import { getAuth, signOut } from "firebase/auth";
import { useRecoilState } from "recoil";
import { userState } from "../lib/recoil/userState";
export const useLogout = () => {
    const auth = getAuth();
    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log("Sign-out successful.")
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return { logout }
}