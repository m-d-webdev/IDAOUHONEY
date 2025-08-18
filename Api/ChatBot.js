import Api from "@/lib/axios";

export const GetAnswerFromAI = ({ oldChats = [], clientQuestion }) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const res = await Api.post("/ask-ai", { oldChats, clientQuestion })
                const data = res.data;
                resolve(data);
            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};