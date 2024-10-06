import { Button, Input, InputGroup, Layout } from '@/components'
import { jobListAction } from '@/services/actions'
import { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Home = () =>
{
    const dispatch = useDispatch()
    const { data: { currentPage, totalPages } } = useSelector(state => state.job_list)
    const data = useSelector(state => state.job_list)
    const navigate = useNavigate()

    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [fullTime, setFullTime] = useState(false)
    const [page, setPage] = useState(1)
    const [jobList, setJobList] = useState([])

    const handleSearch = () =>
    {
        const params = new URLSearchParams()
        if (description) params.append('description', description)
        if (location) params.append('location', location)
        if (fullTime) params.append('full_time', 'true')

        navigate(`/?${params.toString()}`)
        setPage(1)

        dispatch(jobListAction({
            description,
            location,
            full_time: fullTime ? 'true' : '',
            page: 1
        }))
    }

    const handleLoadMore = () =>
    {
        const res = {
            succeed: data => setJobList([...jobList, ...data.jobs])
        }

        const nextPage = page + 1
        setPage(nextPage)

        dispatch(jobListAction({
            description,
            location,
            full_time: fullTime ? 'true' : '',
            page: nextPage
        }, res))
    }

    useEffect(() =>
    {
        const res = {
            succeed: data => setJobList([...jobList, ...data.jobs])
        }
        dispatch(jobListAction({ page }, res))
    }, [dispatch])

    return (
        <HelmetProvider>
            <Helmet>
                <title>Home - GitHub Jobs</title>
            </Helmet>

            <Layout>
                <div className="p-[15px] border flex items-center">
                    <InputGroup className="flex-1 mr-3" label="Job Description" labelFor="description">
                        <Input
                            type="text"
                            placeholder="Filter by title, benefits, companies, expertise"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            id="description"
                        />
                    </InputGroup>

                    <InputGroup className="flex-1 mr-3" label="Location" labelFor="location">
                        <Input
                            type="text"
                            placeholder="Filter by city, state, zip code or country"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            id="location"
                        />
                    </InputGroup>

                    <div className="flex items-center h-[46px] mt-[20px]">
                        <div className="w-[150px] mr-3">
                            <input
                                type="checkbox"
                                id="fulltime"
                                name="fulltime"
                                checked={fullTime}
                                onChange={(e) => setFullTime(e.target.checked)}
                            />
                            <label className="text-sm font-bold" htmlFor="fulltime"> Full Time Only</label>
                        </div>

                        <Button onClick={handleSearch}>Search</Button>
                    </div>
                </div>

                <div className="p-[15px] mx-[15px] border">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold pb-[15px]">Job List</h2>
                        <p className="text-sm">Total Jobs: {jobList.length}</p>
                    </div>

                    {jobList.length > 0 && jobList.map((job, index) => (
                        <Link to={`/detail/${job.id}`} key={`job-${index+1}`}>
                            <div className="flex justify-between text-sm py-[12px] border-y-[1px] border-y-[#dedede]">
                                <div>
                                    <p className="text-blue-500 font-bold">{job.title}</p>
                                    <div>
                                        <span>{job.company} - </span>
                                        <span className="text-green-500">{job.type}</span>
                                    </div>
                                </div>

                                <div>
                                    <p>{job.location}</p>
                                    <p className="text-[#cccccc]">1 Day Ago</p>
                                </div>
                            </div>
                        </Link>
                    ))}

                    {currentPage < totalPages && (
                        <div className="mt-[25px]">
                            <Button className="w-full" onClick={handleLoadMore}>More Jobs</Button>
                        </div>
                    )}
                </div>
            </Layout>
        </HelmetProvider>
    )
}

export default Home