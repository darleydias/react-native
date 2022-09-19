import axios from "axios"


class OperacoesServices{
    async getOperacoes(){
        try {
            return await axios.get("http://localhost:3001/operacoes/");
        } catch (err) {
            console.log(err)
            return err.response.status
        }
    }
    async createOperacao(operacao){
        try {
            return await axios.post("http://localhost:3001/operacoes/",operacao)            
        } catch (error) {
            
        }
    }
}
export default new OperacoesServices()