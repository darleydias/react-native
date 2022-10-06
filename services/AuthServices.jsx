import axios from "axios"
import Asyncstorage from "@react-native-async-storage/async-storage"

class AuthServices{
    
    login(credential){
        // return (axios.post("https://catenampmg.herokuapp.com/login/",credential));
        return (axios.post("http://localhost:3000/login/",credential));
    }
    setLoggedUser(token_user){
        //console.log(token_user.token)
        Asyncstorage.setItem("token_user",token_user.token);
        Asyncstorage.setItem("refreshToken",token_user.refreshToken);
    }   
    async getLoggedUser(){
        let user_token = await Asyncstorage.getItem("token_user");
        let refreshToken = await Asyncstorage.getItem("refreshToken");
        let tokens = {'user_token':user_token,'refreshToken':refreshToken}
        return tokens;
    } 
    getRemoteToken(token){
        let result = axios.get("http://localhost:3000/usuarios/"+ token)
        return result
    }
    renew(credentials){
        let result = axios.post("http://localhost:3000/login/",credentials)
        return result
    }

}
export default new AuthServices()