import { clientFetchById } from "../../service/client-fetch-by-id.js";
import { clientShow } from "./show.js";

// const id = document.getElementById('id')

export async function clients() {

    // const customerId = id.value
    const clientId = "124-537-835-230"
    
    const client = await clientFetchById({ clientId })
    
    // clientShow({client})
}