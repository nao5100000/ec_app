import { ReactElement } from 'react'
import Header from "../organisms/header";

type LayoutProps = Required<{
    readonly children: ReactElement
}>
const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
export default Layout;