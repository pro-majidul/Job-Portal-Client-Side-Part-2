import React, { useState } from 'react';
import useDataFetch from '../../hooks/useDataFetch';
import HotJobCard from '../Home/HotJobCard';
import { IoSearchOutline } from 'react-icons/io5';

const AllJobs = () => {
    const [sort, setSort] = useState(false)
    const { jobs, loading } = useDataFetch( sort )
    if (loading) {
        return <div className='flex items-center justify-center h-96'><span className="loading loading-spinner loading-lg"></span></div>
    }
    return (
        <div className='py-5'>
            <h3 className='md:text-4xl font-bold text-xl text-center text-gray-800 py-5'>All Jobs Here</h3>
            <div className='my-5 py-5 bg-gray-300 p-3 flex items-center justify-between gap-5'>
                <button onClick={() => setSort(!sort)} className={`btn ${sort ? 'btn-accent' : ''}`}>{sort ? 'Sorted By Salery' : 'Sort By Salery'}</button>
                <div className='w-full flex items-center'>
                    <IoSearchOutline size={38} />
                    <input type="text" className=' input w-full max-w-2xl input-bordered' />
                </div>
                <div className='space-y-4'>
                    <label >
                        Min Prize
                        <input type="text" className="input block input-bordered" />
                    </label>
                    <label >
                        Max Prize
                        <input type="text" className="input block input-bordered" />
                    </label>
                </div>
            </div>
            <div className='grid grid-cols-1 my-5 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default AllJobs;