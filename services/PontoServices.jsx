import api from "./ApiInterceptor"

class PontoServices{
    
    async getPonto(){
        try {
             return await (await api.get("pontos/"));
            //  return await (await axios.get("https://darley-12797.herokuapp.com/pontos/"));
            // return await (await axios.get("http://localhost:3001/pontos/"));
        } catch (err) {
            console.log(err)
            return err.response.status
        }
    }
    async getPontoById(id){
        try {
            const result = await(await api.get("pontos/"+ id)).data[0]
            console.log(result)
            return result
            // return await(await axios.get("https://darley-12797.herokuapp.com/pontod/"+ codigo)).data[0]            
            // return await(await axios.get("http://localhost:3001/pontos/"+ codigo)).data[0]            
        } catch (error) {
            console.log(error)
        }
    }
    async getPontoByIdUsuario(id){
        try {
            let teste = await(await api.get("pontos/"+ id +"/pontos")).data[0] // http://localhost:3000/ponto/1/pontos 
            return teste

        } catch (error) {
            console.log(error)
        }
    }
    async updatePonto(ponto){
        try {

            return await(await api.put("pontos/"+ ponto.id,ponto))
            // return await(await axios.put("https://darley-12797.herokuapp.com/pontos/"+ pontos.codigo,pontos))
            // return await(await axios.put("http://localhost:3001/pontos/"+ pontos.codigo,pontos))
        } catch (error) {
            console.log(error)
        }
    }
    async deletePonto(id){
        try {
              return await(await api.delete("pontos/"+ id))
            //   return await(await axios.delete("https://darley-12797.herokuapp.com/pontos/"+ codigo))
            //   return await(await axios.delete("http://localhost:3001/pontos/"+ codigo))
        } catch (error) {
            console.log(error)
        }
        
    }
    async createPonto(ponto){
        try {
            return await api.post("pontos/",ponto)    
            // return await axios.post("darley-12797.herokuapp.com/pontos/",recon)            
            // return await axios.post("http://localhost:3001/pontos/",recon)            
        } catch (error) {
            console.log(error)
        }
    }
}
export default new PontoServices()