import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/myProfile.css';
import { getMission } from '../Redux/mission';

const MyProfile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionReducer);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMission());
    }
  }, []);
  return (
    <>
      <div className="my-profile-container">
        <h2>My Mission</h2>
        <ul className="list-unstyled">
          {missions.filter((mission) => mission.reserved === true).map((fmission) => (
            <li key={fmission.id} className="border p-3 w-50">
              {fmission.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default MyProfile;
