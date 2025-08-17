"use client";
import axios from "axios";
import Cookies from "js-cookie";

const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL



const Api = axios.create({
    baseURL: NEXT_PUBLIC_BACKEND_URL,
    withCredentials: true,
    headers:{
        Authorization:`Bearer ${Cookies.get("AccessToken")}`
    }
});


Api.interceptors.request.use(
    (config) => {
        if (config.params) {
            config.params['lang'] = Cookies.get('i18next')
        }
        if (config.data) {
            config.data = {
                ...config.data,
                lang: Cookies.get('i18next')
            }
        }
        return config
    }

);


Api.interceptors.response.use(

    (response) => {
        if (response.data.AccessToken) {
            Cookies.set("AccessToken", response.data.AccessToken)
        }
        return response;
    },

    async (error) => {
        if ((error.response.status == "500")) {
        } else if ((error.response.status == "400")) {
        }
        return Promise.reject(error)
    }
)



export default Api