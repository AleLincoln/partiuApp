const PATH =  window.location.hostname.includes('localhost') ? 'http://localhost:8080' : 'https://patiubk.herokuapp.com'

const ALL_CATEGORIES_AND_PLACES_PATH = `${PATH}/categorias?_embed=places`

const ALL_PLACES_PATH = `${PATH}/newPlaces`

const myPaths = {
    PATH,
    ALL_CATEGORIES_AND_PLACES_PATH,
    ALL_PLACES_PATH
}

export default myPaths