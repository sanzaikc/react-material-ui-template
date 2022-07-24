import { Route, Routes } from "react-router-dom";

import { CMSRoutes } from "./routers/CMSRoutes";
import { HomeScreen } from "./screens/HomeScreen";
import { NotFoundScreen } from "./screens/NotFoundScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/cms/*" element={<CMSRoutes />} />
        <Route path="/*" element={<NotFoundScreen />} />
      </Routes>
    </div>
  );
}

export default App;
