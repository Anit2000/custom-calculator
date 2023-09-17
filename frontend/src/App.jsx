import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  console.log(user);
  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.text())
      .then((user) => {
        setUser(JSON.parse(user));
      });
  }, []);
  return (
    <>
      <h1>{user && user.name}</h1>
      <h1>{!user && "User not found"}</h1>
    </>
  );
}

export default App;
