import { useRouter } from 'next/router'

type Props = {
    text: string,
    href: string,

}
const RegisterButton = (props: Props) => {
    const router = useRouter();
    const style = {
        marginRight: props.href === 'login' ? 0 : 13,
        background: props.href === 'login' ? 'white' : 'linear-gradient(to right,#ff5858,#f09819)',
        color: props.href === 'login' ? '#ff5858' : 'white',
        filter: props.href === 'login' ? 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))' : 'none',
        width: 170,
        borderRadius: 50,
        height: 45
    }

    const handleClick = (e: any) => {
        e.preventDefault()
        router.push(props.href);
    }
    return (
        // <button className="bg-gradient-to-r from-gradient-red to-gradient-orange w-52 text-white p-3 rounded-full bg-[length:180%_auto] ease-out duration-300 hover:bg-[length:100%_auto] mr-3.5">新規会員登録</button>
        <button style={style} onClick={handleClick}>{props.text}</button>
    )
}

export default RegisterButton;