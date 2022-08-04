import { useLogout } from "../../hooks/useLogout";
const LogoutButton = () => {
    const { logout } = useLogout();
    return <button className="color-dark-gray underline text-sm" onClick={() => logout()}>ログアウト</button>
}
export default LogoutButton;