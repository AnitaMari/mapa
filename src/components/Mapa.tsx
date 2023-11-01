import { Map, Marker } from "pigeon-maps"
import { osm } from 'pigeon-maps/providers'
import { maptiler } from 'pigeon-maps/providers'

export function Mapa() {
    // const maptilerProvider = maptiler('MY_API_KEY', 'streets')
    const maptilerProvider = maptiler('https://api.maptiler.com/maps/streets-v2/static/2.4160,42.0578,8/400x300.png?key=MAPTILER_API_KEY', 'streets')

  return (
    <><><Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
          <Marker width={50} anchor={[50.879, 4.6997]} />
        </Map>
        <Map
            provider={osm}
            height={200}
            defaultCenter={[50.879, 4.6997]}
            defaultZoom={11} /></>
        <Map
            provider={maptilerProvider}
            dprs={[1, 2]} // this provider supports HiDPI tiles
            height={200}
            defaultCenter={[50.879, 4.6997]}
            defaultZoom={11} /></>
  )
}