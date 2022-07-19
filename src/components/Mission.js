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
            className={((missions.indexOf(mission) + 1) % 2 === 0 ? 'bg-light' : '')}
          >
            <th className="border fs-5 flex p-2">
              <p>{mission.name}</p>
            </th>
            <td className="border p-2 pb-5">{mission.description}</td>
            <td className="border p-1">
              {mission.reserved
                ? (
                  <p
                    className="text-info text-center bg-info text-white border rounded"
                    style={{ minWidth: '120px' }}
                  >
                    ACTIVE MEMBER
                  </p>
                ) : (
                  <p
                    className="border rounded text-danger text-center bg-secondary text-white"
                    style={{ minWidth: '120px' }}
                  >
                    NOT A MEMBER
                  </p>
                )}
            </td>
            <td className="p-2 border">
              {!mission.reserved
                ? (
                  <button
                    onClick={() => dispatch(joiningMissionAction(mission.id))}
                    type="button"
                    className="py-2 border-success rounded text-center"
                    style={{ minWidth: '100px' }}
                  >
                    Join Mission
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(leavingMissionAction(mission.id))}
                    type="button"
                    className="py-2 border border-danger rounded text-danger text-center"
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
