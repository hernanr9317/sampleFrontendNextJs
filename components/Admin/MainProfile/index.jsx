import {DataBox} from './DataBox';
import {ImageBox} from './ImageBox';

export const MainProfile = () => {
  return (
    <div className="container profile-container">
      <ImageBox />
      <DataBox />
    </div>
  );
};
