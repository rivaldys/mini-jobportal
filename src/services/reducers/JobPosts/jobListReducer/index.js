import { JOB_LIST } from '@/utils'

const initialState = {
    data: {
        jobs: [],
        currentPage: 1,
        totalJobs: 0,
        totalPages: 1
    },
    errors: false,
    isLoading: false
}

const jobListReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case JOB_LIST.ATTEMPT:
            return {
                ...state,
                data: false,
                errors: false,
                isLoading: action.payload.isLoading
            }
        case JOB_LIST.FAILED:
            return {
                ...state,
                data: false,
                errors: action.payload.errors,
                isLoading: false
            }
        case JOB_LIST.SUCCEED:
            return {
                ...state,
                data: action.payload.data,
                errors: false,
                isLoading: false
            }
        default:
            return state
    }
}

export default jobListReducer