import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login-page"
          element={<LoginPage />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;