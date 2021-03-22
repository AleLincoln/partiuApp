import PATH from '../config'

async function getPlaces(){

    return fetch(PATH).then( async (res) =>{

        if(res.ok){
            
            const resp = await res.json()

            return resp
        }

        throw new Error('Não foi possível ter uma resposta :=(')

    })


}


const placesRepository = {
    getPlaces
}


export default placesRepository