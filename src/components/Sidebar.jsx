import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div id="sidebar">
      
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard">Crop</NavLink>
          </li>
          <li>
            <NavLink to="/farmers">CropType</NavLink>
          </li>
      
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
