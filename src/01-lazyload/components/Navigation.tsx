import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import viteLogo from "/vite.svg";
import { LazyPage1 } from "../pages/LAzyPage1";
import { LazyPage2 } from "../pages/LazyPage2";
import { LazyPage3 } from "../pages/LazyPage3";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <ul>
            <li>
              <NavLink
                to="/lazy1"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                lazy1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                lazy2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy3"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                lazy3
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/lazy1" element={<LazyPage1></LazyPage1>}></Route>
          <Route path="/lazy2" element={<LazyPage2></LazyPage2>}></Route>
          <Route path="/lazy3" element={<LazyPage3></LazyPage3>}></Route>
          <Route
            path="/*"
            element={
              <h1>
                <Navigate to={"/lazy1"} replace></Navigate>
              </h1>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
