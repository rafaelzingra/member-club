import { apiConfig } from "./api-config"

export async function clientFetchById ({clientId}) {
    
    try {        
        const response = await fetch(`${apiConfig.baseURL}/clients`)
        
        const data = await response.json()        
        
        const clients = data.filter((client) =>
            client.id == clientId
        )        
                
        return clients
    } catch (error) {
        console.log(error)
        alert("Não foi possível buscar o cliente. Tente novamente mais tarde.")
    }
}