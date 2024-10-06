import { LOGIN, setFail, setLoading, setSuccess, storeData } from '@/utils'
import axios from 'axios'

const loginAction = (req, res) =>
{
    return dispatch =>
    {
        dispatch(setLoading(LOGIN.ATTEMPT))

        axios({
            method: 'POST',
            url: `${import.meta.env.VITE_API_URL}/auth/login`,
            headers: { 'Accept': 'application/json' },
            data: req
        })
        .then(result =>
        {
            storeData('access_token', result.data.token)
            storeData('logged_in_user', result.data.loggedInUser)
            dispatch(setSuccess(LOGIN.SUCCEED, result.data.message))
            if(res && res.succeed) res.succeed()
        })
        .catch(error =>
        {
            console.log('Error:', error.response)
            dispatch(setFail(LOGIN.FAILED, error.response.data.errors))
            if(res && res.failed) res.failed()
        })
    }
}

export default loginAction