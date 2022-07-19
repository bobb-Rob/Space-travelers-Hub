import { useSelector } from 'react-redux';
import '../styles/rockets.css';

const Rockets = () => {
  const state = useSelector((state) => state.rocketReducer);
  console.log(state);
  return (
    <div className="rockets-list-container">Rockets</div>
  );
};
export default Rockets;
