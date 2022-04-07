import Image from 'next/image'

type Props = {
    username: string
}
const CardIdeaUser = (props: Props) => {
    return (
        <div className="flex justify-start items-center">
            <div className="relative rounded-full w-5 h-5 overflow-hidden mr-2">
                <Image src="/images/user_icon.jpg" layout='fill'
                    objectFit='contain' alt="user icon" />
            </div>
            <p className="text-xs text-dark-gray03">{props.username}</p>
        </div>
    )
}
export default CardIdeaUser;