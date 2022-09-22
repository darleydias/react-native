import axios from "axios"


class OperacoesServices{
    
    async getOperacoes(){
        try {
            return await (await axios.get("https://catenampmg.herokuapp.com/operacoes/"));
            // return await (await axios.get("http://localhost:3001/operacoes/"));
        } catch (err) {
            console.log(err)
            return err.response.status
        }
    }
    async getOperacaoByCodigo(codigo){
        try {
            return await(await axios.get("https://catenampmg.herokuapp.com/operacoes/"+ codigo)).data[0]            
            // return await(await axios.get("http://localhost:3001/operacoes/"+ codigo)).data[0]            
        } catch (error) {
            console.log(error)
        }
    }
    async updateOperacao(operacao){

        try {
            return await(await axios.put("https://catenampmg.herokuapp.com/operacoes/"+ operacao.codigo,operacao))
            // return await(await axios.put("http://localhost:3001/operacoes/"+ operacao.codigo,operacao))
        } catch (error) {
            console.log(error)
        }
        
    }
    async deleteOperacao(codigo){
        try {
              return await(await axios.delete("https://catenampmg.herokuapp.com/operacoes/"+ codigo))
            //   return await(await axios.delete("http://localhost:3001/operacoes/"+ codigo))
        } catch (error) {
            console.log(error)
        }
        
    }
    async createOperacao(operacao){
        try {
            return await axios.post("https://catenampmg.herokuapp.com/operacoes/",operacao)            
            // return await axios.post("http://localhost:3001/operacoes/",operacao)            
        } catch (error) {
            console.log(error)
        }
    }
}
export default new OperacoesServices()