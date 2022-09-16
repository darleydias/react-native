import axios from "axios"


class OperacoesServices{
    async getOperacoes(){
        try {
            return await axios.get("http://localhost:3001");
        } catch (err) {
            console.log(err)
            return err.response.status
        }
    }
}
export default new OperacoesServices()