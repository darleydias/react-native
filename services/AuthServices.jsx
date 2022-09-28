import axios from "axios"
import Asyncstorage from "@react-native-async-storage/async-storage"

class AuthServices{
    
    login(credential){
        return (axios.post("https://catenampmg.herokuapp.com/login/",credential));
    }
    setLoggedUser(token_user){
        Asyncstorage.setItem("token_user",token_user);
    }   
    async getLoggedUser(){
        let user_token = await Asyncstorage.getItem("token_user");
        return user_token;
    } 
}
export default new AuthServices()