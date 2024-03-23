import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetail = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job => job.id == id)
    console.log(job)

    const handleAdd = () => {
        toast("Added Successfully")
    }
    return (
        <div>
            <h3>Job Id: {id}</h3>
            <div className='grid  gap-5 grid-cols-7 w-[1200px] mx-auto mt-12'>
                <div className='bg-gray-200 col-span-5'>
                    <h1 className='text-5xl'>Job Description</h1>
                    <h1 className='text-2xl'>{job.job_title}</h1>
                    <p>{job.company_name}</p>
                </div>

                <div className='bg-gray-200'>
                    <h1>Add To Local Storage</h1>
                    <button onClick={handleAdd} className='bg-primary btn'>Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetail;