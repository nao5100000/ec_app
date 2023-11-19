import Image from 'next/image'

const MypageIcon = () => {
    return (
        <div className="relative rounded-xl w-24 h-24 overflow-hidden shadow-md mx-auto mb-5">
            <Image src="/images/user_icon.jpg" layout='fill'
                objectFit='contain' alt="user icon" />
        </div>
    )
}
export default MypageIcon;