import {Navigate, Route, Routes } from "react-router-dom";
import paths from "./paths";
import Profile from "../pages/profile/Profile";
import Login from "../pages/login/Login";

const Router = () => {
    return (
      <Routes>
          <Route path={paths.LOGIN} element={<Login />} />
          <Route path={paths.PROFILE} element={<Profile />} />
          <Route path={paths.MISMATCHED_ROUTES} element={<Navigate to={paths.LOGIN} />} />
      </Routes>
    );
}

export default Router;