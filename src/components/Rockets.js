import { useSelector } from 'react-redux';
import RocketCard from './RocketCard';
import '../styles/rockets.css';

const Rockets = () => {
  const state = useSelector((state) => state.rocketReducer);
  console.log(state);

  return (
    <div className="rockets-list-container">
      {state.map((rocket) => {
        const {
          description, rocketName, flickrImage, id,
        } = rocket;
        return (
          <RocketCard
            key={id}
            description={description}
            image={flickrImage}
            name={rocketName}
          />
        );
      })}
    </div>
  );
};
export default Rockets;
