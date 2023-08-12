import axios from "axios";

export async function LoginUser(data:Object){
    try {
        const response = await axios.post(`/api/users/login`,data)
        return Promise.resolve(response.data)
    } catch (error:any) {
        const errorMsg = error.response ? error.response.data.msg : error.message;
        return Promise.reject({ msg: errorMsg });
    }
}