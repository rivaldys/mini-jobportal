import { Layout } from '@/components'
import { jobDetailAction } from '@/services/actions'
import { ILPlaceholderImage } from '@/assets'
import { cva } from 'class-variance-authority'
import { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const rteOutputStyle = cva('[&>p]:mb-[10px] last:[&>p]:mb-0 [&>ul]:list-disc [&>ul]:pl-[15px] [&>ul]:leading-[28px] [&>ol]:list-decimal [&>ol]:pl-[15px] [&>ol]:leading-[28px] [&>ul>li>ul]:list-[circle] [&>ul>li>ul]:pl-[15px] [&>ul>li>strong]:font-semibold [&>ul>li>i>strong]:font-semibold [&>p>strong]:font-semibold')

const Detail = () =>
{
    const dispatch = useDispatch()
    const { data: job } = useSelector(state => state.job_detail)
    const { id } = useParams()

    console.log('Job:', job)

    useEffect(() =>
    {
        dispatch(jobDetailAction({ job_id: id }))
    }, [id])

    return (
        <HelmetProvider>
            <Helmet>
                <title>Detail - Mini Job Portal</title>
            </Helmet>

            <Layout>
                <div className="p-[15px]">
                    <Link className="text-blue-500 font-bold" to="/">&larr; Back</Link>
                </div>

                {job ? (
                    <div className="p-[15px] mx-[15px] border">
                        <p>{job.type} / {job.location}</p>
                        <h2 className="text-xl font-bold pb-[15px] border-b-[1px] border-b-[#dedede] mb-[15px]">{job.title}</h2>

                        <div className="flex">
                            <div
                                className={rteOutputStyle({ className: 'flex-1 mr-5' })}
                                dangerouslySetInnerHTML={{__html: job.description}}
                            />

                            <div className="w-[350px]">
                                <div className="border-[3px] border-[#dedede]">
                                    <p className="font-medium p-[10px] border-b border-b-[#dedede] pb-[15px] mb-[15px]">{job.company}</p>
                                    {/* <img className="w-[300px]" src={job.company_logo} alt={job.id} /> */}

                                    {/* NOTES: Image URL can't be accessed. */}
                                    <img className="w-[300px] mx-auto" src={ILPlaceholderImage} alt={job.id} />
                                    <a className="block p-[10px] text-sm text-blue-500 underline border-t border-t-[#dedede] pt-[15px] mt-[15px]" href={job.company_url}>{job.company_url}</a>
                                </div>

                                <div className="border-[3px] border-[#dedede] bg-yellow-50 mt-[30px]">
                                    <p className="font-medium p-[10px] border-b border-b-[#dedede] pb-[15px]">How to apply</p>
  
                                    <div
                                        className={rteOutputStyle({ className: 'p-[10px] text-sm' })}
                                        dangerouslySetInnerHTML={{__html:job.how_to_apply}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="italic">Sedang memuat...</p>
                )}
                
            </Layout>
        </HelmetProvider>
    )
}

export default Detail