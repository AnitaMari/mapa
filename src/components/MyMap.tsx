import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './mapa.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from "leaflet/dist/images/marker-icon.png"

let iconUbicacion = new L.icon({
  iconUrl: icon,
  iconShadow: iconShadow,
  iconSize: [60, 55],
  iconAnchor: [22, 94],
  shadowAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

export const MyMap = () => {

  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="mapa">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]} icon={iconUbicacion}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )

}