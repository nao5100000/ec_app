import Image from 'next/image'

type Props = {
    username: string
    position: string
}
const CardIdeaUser = (props: Props) => {
    const style = {
        background: props.position === 'アイデア' ? '#ccc' : '#ff5858',
    }
    return (
        <div className="flex justify-start items-center">
            <div className="relative rounded-full w-5 h-5 overflow-hidden mr-2">
                <Image src="/images/user_icon.jpg" layout='fill'
                    objectFit='contain' alt="user icon" />
            </div>
            <div>
                <span className="text-[0.6rem] text-white block text-center w-12 font-semibold mb-1" style={style}>{props.position}</span>
                <p className="text-xs text-dark-gray03">{props.username}</p>
            </div>
        </div>
    )
}
export default CardIdeaUser;