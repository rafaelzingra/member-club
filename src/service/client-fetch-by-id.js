import { apiConfig } from "./api-config"

export async function clientFetchById ({clientId}) {
    
    try {        
        const response = await fetch(`${apiConfig.baseURL}/clients`)
        
        const data = await response.json()        
        
        const clients = data.filter((client) =>
            client.id == clientId
        )        

        if(clients.length < 1) {
            throw "404"
        }
                
        return clients
    } catch (error) {
        console.log(error)
        alert("Id inválido. Tente novamente")
    }
}