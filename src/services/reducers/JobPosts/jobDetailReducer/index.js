import { JOB_DETAIL } from '@/utils'

const initialState = {
    data: {},
    errors: false,
    isLoading: false
}

const jobDetailReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case JOB_DETAIL.ATTEMPT:
            return {
                ...state,
                data: false,
                errors: false,
                isLoading: action.payload.isLoading
            }
        case JOB_DETAIL.FAILED:
            return {
                ...state,
                data: false,
                errors: action.payload.errors,
                isLoading: false
            }
        case JOB_DETAIL.SUCCEED:
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

export default jobDetailReducer