import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div id="sidebar">
      <h1>Agriculture Admin</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/farmers">Farmers</NavLink>
          </li>
          <li>
            <NavLink to="/farmlands">Farmlands</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
