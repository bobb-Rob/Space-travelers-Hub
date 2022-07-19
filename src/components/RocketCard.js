import PropTypes from 'prop-types';

const RocketCard = ({ description, name, image }) => (
  <div className="rocket-card">
    <div>
      <img src={image} alt={name} />
    </div>
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <button type="button">Reserve Rocket</button>
    </div>
  </div>
);

export default RocketCard;

RocketCard.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
