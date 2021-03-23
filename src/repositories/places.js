import myPaths from '../config'

async function getCategories(){

    return fetch(myPaths.ALL_CATEGORIES_AND_PLACES_PATH).then( async (res) =>{

        if(res.ok){
            
            const resp = await res.json()

            return resp
        }

        throw new Error('Não foi possível ter uma resposta :=(')

    })


}


async function setNewPlace(placeObject){

    return fetch(myPaths.ALL_PLACES_PATH , {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(placeObject)
    })
        .then( async (res) =>{

            if(res.ok){
                
                const resp = await res.json()
    
                return resp
            }

            throw new Error('Não foi possível ter uma resposta :=(')

        })


}


const placesRepository = {
    getCategories,
    setNewPlace
}


export default placesRepository