import { useSelector } from 'react-redux';
import '../styles/myProfile.css';

const MyProfile = () => {
  const getReservedRockets = ({ rocketReducer }) => rocketReducer.filter(({ status }) => status);
  const reserved = useSelector(getReservedRockets);
  return (
    <div className="my-profile-container">
      <section>
        <h2>My Missions</h2>
        <ul style={{ border: '1px solid var(--borderLines)', padding: '0' }}>
          {/* I have styled this section, you only need to implement the filter here */}
        </ul>
      </section>
      <section>
        <h2>My Rockets</h2>
        <ul style={{ border: '1px solid var(--borderLines)', padding: '0' }}>
          {reserved.map(({ id, rocketName }) => (
            <li key={id} className="profile-rockets">
              {rocketName}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default MyProfile;
