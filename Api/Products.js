import Api from "@/lib/axios";

export const GetProducts = ({ params }) => {
    return new Promise(
        async (resolve, reject) => {
            try {

                const res = await Api.get("/products", {
                    params
                });

                resolve(res.data);
            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};
export const GetCategories = () => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const res = await Api.get("/GetCategories");
                resolve(res.data);
            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};
export const GetHoneyColors = () => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const res = await Api.get("/GetHoneyColors");
                resolve(res.data);
            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};