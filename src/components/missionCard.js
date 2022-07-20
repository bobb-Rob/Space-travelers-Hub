import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joiningMissionAction, leavingMissionAction } from '../Redux/mission';

const MissionCard = ({ description, name, mission }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <th style={{ minWidth: '170px' }}>
        <p>{name}</p>
      </th>
      <td>{description}</td>
      <td>
        {mission.reserved
          ? (
            <p
              style={{ minWidth: '130px' }}
              className="border bg-info text-light"
            >
              ACTIVE MEMBER
            </p>
          ) : (
            <p
              style={{ minWidth: '130px' }}
              className="border bg-secondary text-light"
            >
              NOT A MEMBER
            </p>
          )}
      </td>
      <td>
        {!mission.reserved
          ? (
            <button
              onClick={() => dispatch(joiningMissionAction(mission.id))}
              type="button"
              style={{ minWidth: '120px' }}
              className="border border-success"
            >
              Join Mission
            </button>
          ) : (
            <button
              onClick={() => dispatch(leavingMissionAction(mission.id))}
              type="button"
              style={{ minWidth: '120px' }}
              className="border border-danger text-danger"
            >
              Leave Mission
            </button>
          )}
      </td>
    </tr>
  );
};
export default MissionCard;

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mission: PropTypes.string.isRequired,
};
