import { removeData } from '@/utils'

const logoutAction = (req, res) =>
{
    removeData('access_token')
    removeData('logged_in_user')
    return setTimeout(() =>
    {
        window.location.replace('/auth/login')
    }, 1000)
}

export default logoutAction