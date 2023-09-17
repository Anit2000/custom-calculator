import { useEffect, useState } from "react";
import RegisterForm from "./components/RegisterForm";
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
      <RegisterForm />
    </>
  );
}

export default App;
