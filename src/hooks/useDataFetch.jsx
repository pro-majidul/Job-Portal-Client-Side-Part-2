import React, { useEffect, useState } from 'react';

const useDataFetch = (sort) => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://job-portal-server-for-recruiter-part2.vercel.app/jobs?sort=${sort}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
                setLoading(false)
            })
    }, [sort])

    return { jobs, loading }
};

export default useDataFetch;