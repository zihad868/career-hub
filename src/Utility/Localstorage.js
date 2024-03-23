
const getStoreJobApplication = () => {
    const storeJobApplication = localStorage.getItem('job-application');

    if(storeJobApplication) {
        return JSON.parse(storeJobApplication);
    }

    return [];
}

const saveJobApplication = (id) => {
    const storedJobApplication = getStoreJobApplication();
    const exist = storedJobApplication.find(jobId => jobId== id);
    if(!exist){
        storedJobApplication.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplication));
    }
}

export {saveJobApplication,getStoreJobApplication}