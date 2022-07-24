import React from "react";

import { Route, Routes } from "react-router-dom";

import { HomeScreen } from "../screens/HomeScreen";
import { LoginScreen } from "../screens/cms/LoginScreen";
import { NotFoundScreen } from "../screens/NotFoundScreen";

export const GuestRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomeScreen />} />
      <Route path="login" element={<LoginScreen />} />
      <Route path="/*" element={<NotFoundScreen />} />
    </Routes>
  );
};
