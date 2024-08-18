import { clientFetchById } from "../../service/client-fetch-by-id.js";
import { clientShow } from "../clients/show.js";

const form = document.querySelector('form')
const identifier = document.getElementById('id')

form.onsubmit = async (event) => {
    event.preventDefault()
    
    try {        
        const clientId = identifier.value.trim()
        if (!clientId) {
            return alert('Informe o id do cliente!')
        }

        const client = await clientFetchById({ clientId })
        clientShow({client})
    } catch (error) {
        console.log('Não foi possível encontrar o cliente, tente novamente mais tarde')        
    }
}