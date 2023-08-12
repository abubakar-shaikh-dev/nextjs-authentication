import axios from "axios";

export async function RegisterUser(data:Object){
    try {
        const response = await axios.post(`/api/users/signup`,data)
        return Promise.resolve(response.data)
    } catch (error:any) {
        const errorMsg = error.response ? error.response.data.msg : error.message;
        return Promise.reject({ msg: errorMsg });
    }
}