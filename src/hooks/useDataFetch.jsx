import React, { useEffect, useState } from 'react';

const useDataFetch = (sort, search, minPrize, maxPrize) => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://job-portal-server-for-recruiter-part2.vercel.app/jobs?sort=${sort}&search=${search}&minPrize=${minPrize}&maxPrize=${maxPrize}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
                setLoading(false)
            })
    }, [sort, search,minPrize , maxPrize])

    return { jobs, loading }
};

export default useDataFetch;