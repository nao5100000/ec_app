import ButtonWraper from "../molecules/header/buttonWrapper";

const Header = () => {
    return (
        <header className="flex justify-center items-center h-20 bg-white fixed w-full shadow-md z-50">
            <div className="flex justify-between items-center w-11/12">
                <h1 className="text-gradient-red font-bold text-3xl">Idea Match</h1>
                <ButtonWraper />
            </div>
        </header>
    )
}

export default Header;