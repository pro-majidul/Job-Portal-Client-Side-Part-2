import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';


const axiosInstance = axios.create({
    baseURL: 'https://job-portal-server-for-recruiter-part2-4a8pxuv5g.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { signOutUser } = useAuth();
    const navigate = useNavigate()
    useEffect(() => {

        axiosInstance.interceptors.response.use(

            response => {
                return response
            }
            ,
            error => {
                if (error.status === 401 || error.status === 403) {
                    console.log('unauthorize ! Redirect to login');
                    signOutUser()
                        .then(() => {
                            console.log('user log out please login again');
                            navigate('/signIn')
                        }).catch(error => {
                            console.log(error);
                        })

                }
                return Promise.reject(error)
            }

        )
    }, [])

    return axiosInstance
};

export default useAxiosSecure;