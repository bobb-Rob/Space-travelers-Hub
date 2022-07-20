import { useSelector } from 'react-redux';
import RocketCard from './RocketCard';
import '../styles/rockets.css';

const Rockets = () => {
  const state = useSelector((state) => state.rocketReducer);

  return (
    <div className="rockets-list-container">
      {state.map((rocket) => {
        const {
          description, rocketName, flickImage, id,
        } = rocket;
        return (
          <RocketCard
            key={id}
            description={description}
            image={flickImage}
            name={rocketName}
          />
        );
      })}
    </div>
  );
};
export default Rockets;
