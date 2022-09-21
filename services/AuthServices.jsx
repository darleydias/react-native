import axios from "axios"


class AuthServices{
    
    async login(credential){
        try {
            return await (await axios.post("localhost:3001/login/",credential));
        } catch (err) {
            console.log(err)
            return err.response.status
        }
    }
    async getOperacaoByCodigo(codigo){
        try {
            return await(await axios.get("http://localhost:3001/operacoes/"+ codigo)).data[0]            
        } catch (error) {
            console.log(error)
        }
    }
    async updateOperacao(operacao){

        try {
            return await(await axios.put("http://localhost:3001/operacoes/"+ operacao.codigo,operacao))
        } catch (error) {
            console.log(error)
        }
        
    }
    async deleteOperacao(codigo){
        try {
              return await(await axios.delete("http://localhost:3001/operacoes/"+ codigo))
        } catch (error) {
            console.log(error)
        }
        
    }
    async createOperacao(operacao){
        try {
            return await axios.post("http://localhost:3001/operacoes/",operacao)            
        } catch (error) {
            console.log(error)
        }
    }
}
export default new AuthServices()