import dynamic from 'next/dynamic';
import {Map, Marker, ZoomControl} from 'pigeon-maps';

const MapLocation = () => {
  return (
    <Map
      height={400}
      defaultCenter={[-27.449391, -58.987009]}
      defaultZoom={18}
      animate={true}
    >
      <Marker width={50} anchor={[-27.449391, -58.987009]} />
      <ZoomControl />
    </Map>
  );
};

export default dynamic(() => Promise.resolve(MapLocation), {
  ssr: false,
});
