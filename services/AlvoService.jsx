import api from "./ApiInterceptor"

class AlvoServices{
    
    async getAlvo(){
        try {
             return await (await api.get("alvos/"));
            //  return await (await axios.get("https://darley-12797.herokuapp.com/alvos/"));
            // return await (await axios.get("http://localhost:3001/alvos/"));
        } catch (err) {
            console.log(err)
            return err.response.status
        }
    }
    async getAlvoById(id){
        try {
            const result = await(await api.get("alvos/"+ id)).data[0]
            console.log(result)
            return result
            // return await(await axios.get("https://darley-12797.herokuapp.com/alvo/"+ codigo)).data[0]            
            // return await(await axios.get("http://localhost:3001/alvos/"+ codigo)).data[0]            
        } catch (error) {
            console.log(error)
        }
    }
    async getAlvoByIdUsuario(id){
        try {
            let teste = await(await api.get("alvos/"+ id +"/alvos")).data[0] // http://localhost:3000/alvo/1/alvos 
            return teste

        } catch (error) {
            console.log(error)
        }
    }
    async updateAlvo(alvo){
        try {

            return await(await api.put("alvos/"+ alvo.id,alvo))
            // return await(await axios.put("https://darley-12797.herokuapp.com/alvos/"+ alvos.codigo,alvos))
            // return await(await axios.put("http://localhost:3001/alvos/"+ alvos.codigo,alvos))
        } catch (error) {
            console.log(error)
        }
    }
    async deleteAlvo(id){
        try {
              return await(await api.delete("alvos/"+ id))
            //   return await(await axios.delete("https://darley-12797.herokuapp.com/alvos/"+ codigo))
            //   return await(await axios.delete("http://localhost:3001/alvos/"+ codigo))
        } catch (error) {
            console.log(error)
        }
        
    }
    async createAlvo(alvo){
        try {
            return await api.post("alvos/",alvo)    
            // return await axios.post("darley-12797.herokuapp.com/alvos/",recon)            
            // return await axios.post("http://localhost:3001/alvos/",recon)            
        } catch (error) {
            console.log(error)
        }
    }
}
export default new AlvoServices()