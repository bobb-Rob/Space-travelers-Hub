import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRockets } from '../Redux/Rockets/rockets';
import '../styles/rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <div className="rockets-list-container">Rockets</div>
  );
};
export default Rockets;
