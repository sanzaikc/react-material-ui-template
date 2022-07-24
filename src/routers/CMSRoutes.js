import React from "react";

import { Route, Routes } from "react-router-dom";

import { DashboardScreen } from "../screens/cms/DashboardScreen";
import { ProfileScreen } from "../screens/cms/ProfileScreen";
import { NotFoundScreen } from "../screens/NotFoundScreen";

export const CMSRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<DashboardScreen />} />
      <Route path="profile" element={<ProfileScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};
