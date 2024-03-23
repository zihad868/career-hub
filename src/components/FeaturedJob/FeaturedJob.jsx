import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeaturedJob = () => {
    const [jobs, setJobs] = useState([])
    const [load, setLoad] = useState(4)

    useEffect(() =>{
        fetch('jobs.json')
           .then(req => req.json())
           .then(data => setJobs(data))
    },[])
    
    return (
        <div className="">
            <div className='flex flex-col justify-center items-center'>
              <h3 className="text-5xl">Featured Job: {jobs.length}</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, atque quisquam? Dignissimos aliquam iusto quam.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {
                    jobs.slice(0, load).map(job => <Job key={job.id} job={job}/>)
                }
            </div>

            <div className={load === jobs.length && "hidden"}>
                <button onClick={() => setLoad(jobs.length)} className="btn bg-primary">Load All</button>
            </div>
        </div>
    );
};

export default FeaturedJob;