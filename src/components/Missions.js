import '../styles/missions.css';
import Mission from './Mission';

function Missions() {
  return (
    <div className="missions-list-container">
      <table className="table table-bordered table-sm">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <Mission />
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
