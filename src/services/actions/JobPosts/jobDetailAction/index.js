import { getData, JOB_DETAIL, setFail, setLoading, setSuccess } from '@/utils'
import axios from 'axios'

const jobDetailAction = (req, res) =>
{
    const accessToken = getData('access_token')

    const jobId = req && req.job_id ? `/${req.job_id}` : null
    if (!jobId) {
        console.error('No job_id provided for job detail request.')
        return dispatch =>
        {
            dispatch(setFail(JOB_DETAIL.FAILED, ['Job ID is required']))
            if (res && res.failed) res.failed()
        }
    }

    return dispatch =>
    {
        dispatch(setLoading(JOB_DETAIL.ATTEMPT))

        axios({
            method: 'GET',
            url: `${import.meta.env.VITE_API_URL}/job-posts/detail${jobId}`,
            headers:
            {
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json'
            }
        })
        .then(result =>
        {
            dispatch(setSuccess(JOB_DETAIL.SUCCEED, result.data.data))
            if(res && res.succeed) res.succeed()
        })
        .catch(error =>
        {
            console.log('Error:', error.response)
            dispatch(setFail(JOB_DETAIL.FAILED, error.response.data.errors))
            if(res && res.failed) res.failed()
        })
    }
}

export default jobDetailAction