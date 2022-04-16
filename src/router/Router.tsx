import {Navigate, Route, Routes } from "react-router-dom";
import paths from "./paths";

function Router() {
    return (
      <Routes>
          <Route path={paths.LOGIN} element={<div>Authorize</div>} />
          <Route path={paths.PROFILE} element={<div>Profile</div>} />
          <Route path={paths.MISMATCHED_ROUTES} element={<Navigate to={paths.LOGIN} />} />
      </Routes>
    );
}

export default Router;