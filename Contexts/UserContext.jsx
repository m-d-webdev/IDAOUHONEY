"use client";
import { CheckToken } from "@/Api/Auth";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react"

const UserContextValue = createContext();

const UserContext = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [data, setData] = useState({});
    const [theme, setTheme] = useState(localStorage?.getItem("theme"))

    const handelChangeTheme = (t) => {
        localStorage?.setItem('theme', t);
        setTheme(t)
        if (t == "auto") {
            window?.matchMedia('(prefers-color-scheme: dark)').matches
                ? document.documentElement.className = "dark"
                : document.documentElement.className = "light"
        } else {
            document.documentElement.className = t
        }

    };


    useEffect(() => {
        Cookies.set("isLoggedIn", isLoggedIn)
    }, [isLoggedIn])

    const handelCheckUser = async () => {
        const res = await CheckToken();
        if (res) {
            setLoggedIn(true)
            setData(res)
        } else {

            setData({})
            setLoggedIn(true)
        }

    }

    useEffect(() => {
        handelCheckUser();

        let defaultTheme = localStorage?.getItem('theme');
        if (!defaultTheme && window?.matchMedia('(prefers-color-scheme: dark)').matches) {
            handelChangeTheme("dark")
        }
        else if (defaultTheme) {
            handelChangeTheme(defaultTheme)
        }

    }, [])
    return (
        <UserContextValue value={{ isLoggedIn, data, theme, handelChangeTheme, setLoggedIn, setData }}>
            {children}
        </UserContextValue>
    )
}


export const UseUser = () => {
    const {
        isLoggedIn,
        data,
        theme,
        handelChangeTheme,
        setLoggedIn,
        setData
    } = useContext(UserContextValue);


    return {
        isLoggedIn,
        data,
        theme,
        handelChangeTheme,
        setLoggedIn,
        setData
    }

}

export default UserContext
