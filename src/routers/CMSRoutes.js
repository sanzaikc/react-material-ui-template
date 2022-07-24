import React from "react";

import { Route, Routes } from "react-router-dom";

import { CMSLayout } from "../layouts/CMSLayout";
import { DashboardScreen } from "../screens/cms/DashboardScreen";
import { SettingsScreen } from "../screens/cms/SettingsScreen";
import { NotFoundScreen } from "../screens/NotFoundScreen";

export const CMSRoutes = () => {
  return (
    <Routes>
      <Route element={<CMSLayout />}>
        <Route path="dashboard" element={<DashboardScreen />} />
        <Route path="settings" element={<SettingsScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Route>
    </Routes>
  );
};
