import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <div className='my-5 py-5'>
           <HotJobs></HotJobs>
           </div>
        </div>
    );
};

export default Home;