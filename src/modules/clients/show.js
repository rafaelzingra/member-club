const clientName = document.getElementById('clientName')
const memberSince = document.getElementById('memberSince')
const clientId = document.getElementById('clientId')
const remainingHaircuts = document.getElementById('remainingHaircuts')
const haircutCounter = document.getElementById('haircutCounter')
const totalHaircuts = document.getElementById('totalHaircuts')
const history = document.getElementById('history')
const count = document.getElementById('count')
const progressBar = document.getElementById('progress-bar')


export function clientShow({client}) {
    try {        
        clientName.innerHTML = ""
        clientId.innerHTML = ""
        memberSince.innerHTML = ""
        remainingHaircuts.innerHTML = ""
        haircutCounter.innerHTML = ""
        totalHaircuts.innerHTML = ""
        
        client.forEach(e => {
            clientName.textContent = e.name
            memberSince.textContent = `Cliente desde ${e.clientSince}`
            clientId.textContent = `ID: ${e.id}`
            remainingHaircuts.textContent = e.loyaltyCard.cutsRemaining
            haircutCounter.textContent = `${e.loyaltyCard.totalCuts} de ${e.loyaltyCard.cutsNeeded}`
            totalHaircuts.textContent = e.loyaltyCard.totalCuts+" corte(s)"

            progressBar.style["width"] = (e.loyaltyCard.totalCuts/e.loyaltyCard.cutsNeeded)*100+"%"

            e.appointmentHistory.forEach(appointment => {
                const row = document.createElement('div')
                const scheduleWrapper = document.createElement('div')
                const sealCheckWrapper = document.createElement('div')
                const scheduleDate = document.createElement('p')
                const scheduleTime = document.createElement('p')
                const sealCheck = document.createElement('img')

                row.classList.add('row')
                row.classList.add('flex')

                scheduleWrapper.append(scheduleDate,scheduleTime)                                
                scheduleDate.textContent = appointment.date
                scheduleTime.textContent = appointment.time
                
                sealCheckWrapper.append(sealCheck)
                sealCheck.setAttribute('src','./src/assets/icons/SealCheckGreen.svg')
                
                row.append(scheduleWrapper,sealCheckWrapper)
                history.appendChild(row)
            });

            for(var i = 0; i < e.loyaltyCard.cutsNeeded; i++) {
                const marker = document.createElement('div')
                const img = document.createElement('img')

                marker.classList.add('marker')
                if (i < e.loyaltyCard.totalCuts){
                    img.setAttribute('src', './src/assets/images/PinCheck.png' )
                    marker.append(img)
                }else if ( i == e.loyaltyCard.cutsNeeded - 1 ){
                    img.setAttribute('src', './src/assets/icons/gift-gray.svg' )
                    marker.append(img)                    
                }
                
                count.appendChild(marker)                
            }
        });
    } catch (error) {
        console.log(error)
        alert("Não foi possível exibir o cliente")
    }
}