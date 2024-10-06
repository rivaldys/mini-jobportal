import { getData, JOB_LIST, setFail, setLoading, setSuccess } from '@/utils'
import axios from 'axios'

const jobListAction = (req, res) =>
{
    const accessToken = getData('access_token')

    let params = []

    if(req && req.description) {
        params.push(`description=${req.description}`)
    }
    
    if(req && req.search) {
        params.push(`search=${req.search}`)
    }
    
    if(req && req.full_time) {
        params.push(`full_time=${req.full_time}`)
    }
    
    if(req && req.page) {
        params.push(`page=${req.page}`)
    }
    
    if(req && req.location) {
        params.push(`location=${req.location}`)
    }
    
    let additional_path = params.length > 0 ? `?${params.join('&')}` : ''

    return (dispatch, getState) =>
    {
        dispatch(setLoading(JOB_LIST.ATTEMPT))

        axios({
            method: 'GET',
            url: `${import.meta.env.VITE_API_URL}/job-posts/list${additional_path}`,
            headers:
            {
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json'
            }
        })
        .then(result =>
        {
            dispatch(setSuccess(JOB_LIST.SUCCEED, result.data.data))
            if(res && res.succeed) res.succeed(result.data.data)
        })
        .catch(error =>
        {
            console.log('Error:', error.response)
            dispatch(setFail(JOB_LIST.FAILED, error.response.data.errors))
            if(res && res.failed) res.failed()
        })
    }
}

export default jobListAction