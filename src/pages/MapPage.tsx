
import db from '../Data/db.json'
import Navbar from '../components/Navbar'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { useLocation } from 'react-router-dom'




function MyMap() {


    const route = useLocation().search.replace('?categorie=', '')   



    const dbPlaces = db.categories.find((item) => item.id === Number(route))

    console.log(dbPlaces)


    return <div>


        <MapContainer style={{height:'90vh', width:'100%'}} center={[41.15083,-8.6375336]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {
                dbPlaces?.places.map((place) => {
                    const [lag, log] = place.position

                    return <Marker position={[lag, log]}>
                                <Popup>
                                    <h3>{place.name}</h3>
                                    <p>{place.description}</p>
                                    <strong>{place.address}</strong>
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

        <Navbar />

    </div>
}

export default MyMap