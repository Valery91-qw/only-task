import {Navigate, Route, Routes } from "react-router-dom";
import PATHS from "./paths";

function Router() {
    return (
      <Routes>
          <Route path={PATHS.LOGIN} element={<div>Authorize</div>} />
          <Route path={PATHS.PROFILE} element={<div>Profile</div>} />
          <Route path={PATHS.MISMATCHED_ROUTES} element={<Navigate to={PATHS.LOGIN} />} />
      </Routes>
    );
}

export default Router;