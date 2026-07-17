import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import AIAssistantPage from "./pages/AIAssistantPage";

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

         <Route path="/dashboard" element={<DashboardPage />} />

         <Route path="/products" element={<ProductsPage />} />

         <Route path="/aiassistant" element={<AIAssistantPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;