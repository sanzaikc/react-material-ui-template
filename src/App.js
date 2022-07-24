import { Route, Routes } from "react-router-dom";

import { CMSRoutes } from "./routers/CMSRoutes";
import { GuestRoutes } from "./routers/GuestRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<GuestRoutes />} />
        <Route path="/cms/*" element={<CMSRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
