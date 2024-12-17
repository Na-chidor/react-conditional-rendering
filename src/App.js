import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      setIsAdmin(true);
      setIsLoggedIn(true);
      setShowError(false);
    } else if (username === "user" && password === "user") {
      setIsAdmin(false);
      setIsLoggedIn(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="App">
      {!isLoggedIn && <LoginForm onLogin={handleLogin} />}
      {isLoggedIn && isAdmin && <AdminDashboard />}
      {isLoggedIn && !isAdmin && <UserDashboard />}
      {showError && <ErrorMessage message="Invalid username or password!" />}
    </div>
  );
}
export default App;