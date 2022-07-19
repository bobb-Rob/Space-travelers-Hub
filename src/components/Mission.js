import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joiningMissionAction, leavingMissionAction } from '../Redux/mission';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  return (
    <>
      {
        missions.map((mission) => (
          <tr
            key={mission.id}
          >
            <th>
              <p>{mission.name}</p>
            </th>
            <td>{mission.description}</td>
            <td>
              {mission.reserved
                ? (
                  <p
                    style={{ minWidth: '120px' }}
                  >
                    ACTIVE MEMBER
                  </p>
                ) : (
                  <p
                    style={{ minWidth: '120px' }}
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
                    style={{ minWidth: '100px' }}
                  >
                    Join Mission
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(leavingMissionAction(mission.id))}
                    type="button"
                    style={{ minWidth: '100px' }}
                  >
                    Leave Mission
                  </button>
                )}
            </td>
          </tr>
        ))
      }
    </>
  );
};

export default Mission;
