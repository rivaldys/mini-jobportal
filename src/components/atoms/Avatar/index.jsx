import { cva } from 'class-variance-authority'
import { ILAvatar } from '@/assets'

const avatarStyle = cva('w-10 h-10 rounded-[10px]')

const Avatar = ({ className, src, alt }) =>
{
    return (
        <img
            className={avatarStyle({ className })}
            src={src ? src : ILAvatar}
            alt={alt ? alt : 'Avatar'}
        />
    )
}

export default Avatar