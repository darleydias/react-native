import axios from "axios";
import AuthServices from "./AuthServices";

const  instance = axios.create({
    baseURL:"https://catenampmg.herokuapp.com/",
    header:{
        "content-type":"application/json"
    }
})

instance.interceptors.request.use(async (config)=>{
    config.headers['auth'] = await AuthServices.getLoggedUser()
    return config;

},(error)=>{
    Promise.reject(error)
})
export default instance;