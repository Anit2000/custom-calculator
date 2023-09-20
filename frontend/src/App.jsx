import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { AuthProvider } from "./helpers/authContext";
import CalculatorComponent from "./components/CalculatorComponent";
import PrivateRoute from "./helpers/privateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="cal" element={<CalculatorComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
