import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyApplications = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    const SecureAxios = useAxiosSecure();

    useEffect(() => {


        // fetch(`https://job-portal-server-for-recruiter-part2.vercel.app/job-application?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => setJobs(data))

        // axios.get(`https://job-portal-server-for-recruiter-part2.vercel.app/job-application?email=${user.email}`, { withCredentials: true })
        //     .then(res => setJobs(res.data))

        SecureAxios.get(`/job-application?email=${user.email}`)
            .then(res => {
                setJobs(res.data)
            })



    }, [user.email])


    const handelDelete = (id) => {
        console.log(id);
        // SecureAxios.delete(`/job-application/${id}?email=${user.email}`)
        //     .then(res => {
        //         setJobs(res.data)
        //     })
        //     .catch(error => {
        //         console.log(error.code);
        //     })
        // fetch(`https://job-portal-server-for-recruiter-part2.vercel.app/job-application/${id}?email=${user.email}`, {
        //     method: "DELETE",
        //     headers: {
        //         'content-type': 'application/json'
        //     }
        // }, { withCredentials: true })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setJobs(data)
        //     })

        axios.delete(`https://job-portal-server-for-recruiter-part2.vercel.app/job-application/${id}?email=${user.email}`, { withCredentials: true })
            .then(res => {
                // setJobs(res.data);
                console.log(res.data);
                const remainingdata = jobs.filter(job => job._id != id);
                setJobs(remainingdata)

            })



    }

    return (
        <div>
            <h2 className="text-3xl">My Applications: {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            jobs.map(job => <tr key={job._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.company_logo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.title}</div>
                                            <div className="text-sm opacity-50">{job.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button onClick={() => handelDelete(job._id)} className="btn btn-ghost btn-xs">X</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplications;