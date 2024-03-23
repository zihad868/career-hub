import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJobApplication } from "../../Utility/Localstorage";

const Applied = () => {
  const [applied, setApplied] = useState([]);
  const [display, setDisplay] = useState([])
  const jobs = useLoaderData();

  const handleJobs = (cate) => {
    if(cate === 'all'){
        setDisplay(applied);
        console.log("all")
    }

    if(cate == 'remote'){
        const remot = applied.filter(job => job.remote_or_onsite === 'Remote')
        setDisplay(remot)
    }

    if(cate == 'onsite'){
        const remot = applied.filter(job => job.remote_or_onsite === 'Onsite')
        setDisplay(remot)
    }
  } 


  useEffect(() => {
    const storeJobs = getStoreJobApplication();
    const appliedJobs = jobs.filter((job) => storeJobs.includes(job.id));
    // console.log(appliedJobs);
    setApplied(appliedJobs);
    setDisplay(appliedJobs);
  }, [jobs]);

  return (
    <div>
      <details className="dropdown">
        <summary className="m-1 btn">App</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <button onClick={() => handleJobs('all')}>All</button>
            <button onClick={() => handleJobs('remote')}>Remote</button>
            <button onClick={() => handleJobs('onsite')}>Onsite</button>
        </ul>
      </details>
      <h4>Applied Jobs: {applied.length}</h4>
      {display.map((job) => (
        <li key={job.id}>
          <span>
            {job.job_title} - {job.remote_or_onsite}
          </span>
        </li>
      ))}
    </div>
  );
};

export default Applied;
