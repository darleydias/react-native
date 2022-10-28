import api from "./ApiInterceptor"

class ReconServices{
    
    async getRecon(){
        try {
             return await (await api.get("recon/"));
            //  return await (await axios.get("https://darley-12797.herokuapp.com/recons/"));
            // return await (await axios.get("http://localhost:3001/recons/"));
        } catch (err) {
            console.log(err)
            return err.response.status
        }
    }
    async getReconById(id){
        try {
            const result = await(await api.get("recon/"+ id)).data[0]
            console.log(result)
            return result
            // return await(await axios.get("https://darley-12797.herokuapp.com/recons/"+ codigo)).data[0]            
            // return await(await axios.get("http://localhost:3001/recons/"+ codigo)).data[0]            
        } catch (error) {
            console.log(error)
        }
    }
    async getReconByIdUsuario(id){
        try {
            let teste = await(await api.get("recon/"+ id +"/recons")).data[0] // http://localhost:3000/recon/1/recons 
            return teste

        } catch (error) {
            console.log(error)
        }
    }
    async updateRecon(recon){
        try {

            return await(await api.put("recon/"+ recon.id,recon))
            // return await(await axios.put("https://darley-12797.herokuapp.com/recons/"+ recons.codigo,recons))
            // return await(await axios.put("http://localhost:3001/recons/"+ recons.codigo,recons))
        } catch (error) {
            console.log(error)
        }
        
    }
    async deleteRecon(id){
        try {
              return await(await api.delete("recon/"+ id))
            //   return await(await axios.delete("https://darley-12797.herokuapp.com/recons/"+ codigo))
            //   return await(await axios.delete("http://localhost:3001/recons/"+ codigo))
        } catch (error) {
            console.log(error)
        }
        
    }
    async createRecon(recon){
        try {
            return await api.post("recon/",recon)    
            // return await axios.post("darley-12797.herokuapp.com/recons/",recon)            
            // return await axios.post("http://localhost:3001/recons/",recon)            
        } catch (error) {
            console.log(error)
        }
    }
}
export default new ReconServices()