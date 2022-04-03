import { ReactElement } from 'react'
import LoginHeader from "../organisms/loginHeader";

type LayoutProps = Required<{
    readonly children: ReactElement
}>
const LoginLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <LoginHeader />
            {children}
        </>
    )
}
export default LoginLayout;