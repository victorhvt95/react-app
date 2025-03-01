import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import viteLogo from "/vite.svg";
import { routes } from "./routes";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <Suspense fallback={"CARGANDO..."}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={viteLogo} className="logo" alt="Vite logo" />
            <ul>
              {routes.map(({ path, name }) => {
                return (
                  <li key={path}>
                    <NavLink
                      key={path}
                      to={path}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ path, Component }) => {
              return (
                <Route key={path} path={path} element={<Component />}></Route>
              );
            })}
            <Route
              path="/*"
              element={
                <h1>
                  <Navigate to={routes[0].path} replace></Navigate>
                </h1>
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
