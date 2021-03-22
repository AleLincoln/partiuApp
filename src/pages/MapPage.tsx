
import db from '../Data/inicial_db.json'
import Navbar from '../components/Navbar'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import {FcGoogle} from 'react-icons/fc'

import { useLocation } from 'react-router-dom'
import placesRepository from '../repositories/places'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader'




function MyMap() {

    const [dadosIniciais, setDadosIniciais] = useState([])

    

    const route = useLocation().search.replace('?categorie=', '')

    useEffect(() => {
        placesRepository.getPlaces().then((res) => setDadosIniciais(res))

    },[])


    const dbPlaces = db.categories.find((item) => item.id === Number(route))



    return <div>

        {
            dadosIniciais.length === 0 && <div></div>
        }

        {

        <MapContainer style={{height:'90vh', width:'100%', zIndex:0}} center={[41.15083,-8.6375336]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {
                dbPlaces?.places.map((place) => {
                    const [lag, log] = place.position
                    const googleSearch = place.address.split(' ').join('+')

                    console.log(googleSearch)

                    return <Marker position={[lag, log]}>
                                <Popup>
                                    <h3>{place.name}</h3>
                                    <p>{place.description}</p>
                                    <strong>{place.address}</strong>

                                    <a href={`https://www.google.com/maps/place/${googleSearch}`} target='__blank'><FcGoogle /></a>
                                </Popup>
                            </Marker>
                })
            }

            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        }



        <Navbar />

    </div>
}

export default MyMap