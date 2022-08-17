import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

export const MyMapComponent = withScriptjs(
  withGoogleMap((props: any) => (
    <GoogleMap zoom={18} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
        icon={{
          url: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png',
          innerWidth: 100,
          innerHeight: 100,
        }}
      />
    </GoogleMap>
  ))
)
