
import Navbar from '../components/Navbar'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { FcGoogle } from 'react-icons/fc'

import { useLocation } from 'react-router-dom'
import placesRepository from '../repositories/places'
import { useEffect, useState } from 'react'






function MyMap() {


    const [dadosIniciais, setDadosIniciais] = useState([])



    const route = useLocation().search.replace('?categorie=', '')

    useEffect(() => {
        placesRepository.getCategories().then((res) => setDadosIniciais([
            ...res,
        ]))

    }, [])


    const allPlaces = dadosIniciais.length > 0 && dadosIniciais.map((item) => item.places).reduce((acc, cv) => acc.concat(cv))

    const dbPlaces = dadosIniciais.length > 0 && dadosIniciais.find((item) => item.id === Number(route)).places

    return <div>

        {
            dadosIniciais.length === 0 && <div></div>
        }

        {dadosIniciais.length > 0 &&



            <MapContainer style={{ height: '90vh', width: '100%', zIndex: 0 }} center={[41.15083, -8.6375336]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://api.maptiler.com/maps/topo/256/{z}/{x}/{y}.png?key=M7DDkWOig8YMAhLSbbsh"
                />

                {

                dbPlaces?.map((place) => {
                        const [lag, log] = place.position
                        const googleSearch = place.address.split(' ').join('+')

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
            </MapContainer>
        }



        <Navbar />

    </div>
}

export default MyMap