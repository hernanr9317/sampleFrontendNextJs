import dynamic from 'next/dynamic';
import {Map, Marker, ZoomControl} from 'pigeon-maps';

const MapLocation = () => {
  const moreInfo = () => {
    window.open('https://goo.gl/maps/P6fwuibbWwifY7sZ8', '_blank');
  };

  return (
    <Map
      height={500}
      defaultCenter={[-27.449391, -58.987009]}
      defaultZoom={18}
      animate={true}
    >
      <Marker width={48} anchor={[-27.449391, -58.987009]} onClick={moreInfo} />
      <ZoomControl />
    </Map>
  );
};

export default dynamic(() => Promise.resolve(MapLocation), {
  ssr: false,
});
