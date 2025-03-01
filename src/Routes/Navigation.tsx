import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import viteLogo from "/vite.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" element={<h1>Home page</h1>}></Route>
          <Route path="about" element={<h1>About page</h1>}></Route>
          <Route path="users" element={<h1>User page</h1>}></Route>
          <Route
            path="/*"
            element={
              <h1>
                <Navigate to={"/home"} replace></Navigate>
              </h1>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
