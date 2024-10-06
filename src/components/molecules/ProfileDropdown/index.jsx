import { Avatar } from '@/components'
import { logoutAction } from '@/services/actions'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProfileDropdown = ({ name, desc, photo }) =>
{
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() =>
    {
        const handleClickOutside = event =>
        {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target))
            {
                setIsMenuVisible(false)
            }
        }

        document.addEventListener('click', handleClickOutside)
        
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logoutHandler = () =>
    {
        const res = {
            succeed: () => navigate('/auth/login', { replace: true })
        }

        dispatch(logoutAction(null, res))
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className={`w-[200px] flex items-center justify-end`}
                onClick={() => setIsMenuVisible(prev => !prev)}
            >
                <>
                    <div className="text-right mr-[10px]" title={name}>
                        <p className="font-medium text-sm text-white">{name}</p>
                        <p className="font-light text-xs text-[#f8f8f8]">{desc}</p>
                    </div>
                    <Avatar className="mr-[5px]" src={photo} />
                </>
            </button>

            {isMenuVisible && (
                <div className={`absolute right-[2px] mt-[5px] py-2 z-[3] w-[200px] flex flex-col text-sm text-[#555555] rounded-lg bg-white shadow`}>
                    <p
                        className="flex items-center px-[15px] py-[8px] transition-all hover:bg-blue-500/45 hover:pl-[20px] hover:cursor-pointer"
                        onClick={logoutHandler}
                    >
                        <span className="ml-[10px]">Keluar</span>
                    </p>
                </div>
            )}
        </div>
    )
}

export default ProfileDropdown