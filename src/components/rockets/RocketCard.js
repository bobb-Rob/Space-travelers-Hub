import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserved } from '../../Redux/Rockets/rockets';

const RocketCard = ({
  description, name, image, id, status,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="rocket-card">
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="card-details">
        <h3>{name}</h3>
        <p>
          {status
            ? <span className="reserveTag">Reserved</span>
            : null}
          {' '}
          {description}
        </p>
        <button
          className={status ? 'reserved' : 'noreserved'}
          type="button"
          onClick={() => dispatch(reserved(id))}
        >
          {status ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

export default RocketCard;

RocketCard.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired,
};
