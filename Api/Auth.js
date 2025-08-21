import Api from "@/lib/axios";
import Cookies from "js-cookie";

export const Login = ({ email, password }) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const res = await Api.post("/login", { email, password });
                const data = res.data;

                resolve(data);
            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};

export const Register = ({ email, address, fullName, phone, password }) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const res = await Api.post("/register", { email, password, address, fullName, phone });
                const data = res.data;

                resolve(data);
            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};

export const LoginSocial = ({ email, fullName, phone, imageUrl }) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const res = await Api.post("/SocialLogin", { email, fullName, phone, imageUrl });
                const data = res.data;

                resolve(data);
            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};


export const CheckToken = () => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const res = await Api.get("/ValidateToken");;
                const data = res.data;
                resolve(data);
            } catch (error) {
                if (
                    error?.response?.data?.InvalideAccessToken ||
                    error?.response?.data?.NoAccessToken
                ) {
                    await Api.get("/refresh-token")
                        .then(res => {
                            resolve(res.data)
                        })
                        .catch(err => {
                            reject({
                                message: "Session expired"
                            });
                        })


                }
                else {
                    reject({
                        message: error.message
                    });
                }
            }
        }
    );
};


export const Logout = () => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const res = await Api.get("/logout");
                Cookies.remove("AccessToken");
                localStorage.removeItem("AI_listChat")
                window.location.href = "/";
            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};