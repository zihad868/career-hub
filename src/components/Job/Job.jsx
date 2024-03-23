import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type} = job;

    return (
        <div className=' p-4'>
            <img src={logo} alt="" />
            <h2>{job_title}</h2>
            <p>{company_name}</p>
            <p>{job_type}</p>
            <div>
                <button className='px-5 py-3 font-semibold border rounded border-[#454] mr-4'>{remote_or_onsite}</button>
                <button className='px-5 py-3 font-semibold border rounded border-[#454] mr-4'>{job_type}</button>
            </div>

            <Link to={`/jobs/${id}`}>
              <button className='btn mt-3'>Details</button>
            </Link>
        </div>
    );
};

export default Job;