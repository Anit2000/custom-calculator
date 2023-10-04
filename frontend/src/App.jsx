import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./helpers/authContext";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./helpers/privateRoute";
import UserForms from "./components/UserForms";
import Settings from "./components/Settings";
import CalculatorsWrapper from "./components/CalculatorWrapper";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserForms />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              {/* Use the `children` prop to specify where child components should be rendered */}
              <Route path="/dashboard/settings" element={<Settings />} />
              <Route
                path="/dashboard/calculators"
                element={<CalculatorsWrapper />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
