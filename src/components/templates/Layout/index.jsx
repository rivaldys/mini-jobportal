import { ProfileDropdown } from '@/components'
import { getData } from '@/utils'
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Layout = ({ children }) =>
{
    const navigate = useNavigate()
    const userInfo = getData('logged_in_user')
    const year = new Date().getFullYear()

    const isAuthenticated = useCallback(() =>
    {
        const accessToken = getData('access_token')
        if(!accessToken) navigate('/auth/login')
    }, [navigate])

    useEffect(() =>
    {
        isAuthenticated()
    }, [isAuthenticated])

    return (
        <div className="min-h-[100vh]">
            <header>
                <nav className="px-[15px] flex items-center justify-between bg-blue-500 h-[85px]">
                    <h1 className="text-white text-2xl">Mini <b className="text-white font-extrabold">Job Portal</b></h1>
                    <ProfileDropdown name={userInfo ? userInfo.fullname : ''} desc="Ini desc" />
                </nav>
            </header>

            <main className="min-h-[calc(100vh-155px)]">
                {children}
            </main>

            <footer className="h-[70px] flex justify-center items-center">
                <p className="text-[#888888] text-sm">&copy; {year == '2024' ? year : `2024-${year}`} Mini Job Portal by <a className="profile-link" href="https://rivaldy.net" target="_blank">Ahmad Rivaldy S</a></p>
            </footer>
        </div>
    )
}

export default Layout