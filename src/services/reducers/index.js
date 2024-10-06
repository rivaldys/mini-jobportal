import { combineReducers } from '@reduxjs/toolkit'
import { loginReducer, logoutReducer } from './Auth'
import { jobDetailReducer, jobListReducer } from './JobPosts'

const reducers = combineReducers({
    login: loginReducer,
    logout: logoutReducer,
    job_detail: jobDetailReducer,
    job_list: jobListReducer
})

export default reducers