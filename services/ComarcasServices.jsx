import axios from "axios"


class ComarcasServices{
    
    async getComarcas(){
        try {
             return await (await axios.get("https://catenampmg.herokuapp.com/comarcas/"));
            //  return await (await axios.get("https://darley-12797.herokuapp.com/comarcas/"));
            // return await (await axios.get("http://localhost:3001/comarcas/"));
        } catch (err) {
            console.log(err)
            return err.response.status
        }
    }
    async getComarcaByCodigo(codigo){
        try {
            return await(await axios.get("https://catenampmg.herokuapp.com/comarcas/"+ codigo)).data[0]            
            // return await(await axios.get("https://darley-12797.herokuapp.com/comarcas/"+ codigo)).data[0]            
            // return await(await axios.get("http://localhost:3001/comarcas/"+ codigo)).data[0]            
        } catch (error) {
            console.log(error)
        }
    }
    async updateComarca(comarca){

        try {
            return await(await axios.put("https://catenampmg.herokuapp.com/comarcas/"+ comarca.codigo,comarca))
            // return await(await axios.put("https://darley-12797.herokuapp.com/comarcas/"+ comarca.codigo,comarca))
            // return await(await axios.put("http://localhost:3001/comarcas/"+ comarca.codigo,comarca))
        } catch (error) {
            console.log(error)
        }
        
    }
    async deleteComarca(codigo){
        try {
              return await(await axios.delete("https://catenampmg.herokuapp.com/comarcas/"+ codigo))
            //   return await(await axios.delete("https://darley-12797.herokuapp.com/comarcas/"+ codigo))
            //   return await(await axios.delete("http://localhost:3001/comarcas/"+ codigo))
        } catch (error) {
            console.log(error)
        }
        
    }
    async createComarca(comarca){
        try {
            return await axios.post("https://catenampmg.herokuapp.com/comarcas/",comarca)    
            // return await axios.post("darley-12797.herokuapp.com/comarcas/",comarca)            
            // return await axios.post("http://localhost:3001/comarcas/",comarca)            
        } catch (error) {
            console.log(error)
        }
    }
}
export default new ComarcasServices()