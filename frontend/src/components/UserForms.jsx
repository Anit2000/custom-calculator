import React from "react";
import { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const UserForms = () => {
  const [loginDisplay, setLoginDisplay] = useState(false);
  return (
    <>
      {loginDisplay && <LoginForm />}
      {!loginDisplay && <RegisterForm />}
      <div className="flex justify-center">
        {loginDisplay && (
          <button
            onClick={() => {
              setLoginDisplay((prev) => false);
            }}
            className="border-b-[1px] border-b-[#000] cursor-pointer"
          >
            Register
          </button>
        )}
        {!loginDisplay && (
          <button
            onClick={() => {
              setLoginDisplay((prev) => true);
            }}
            className="border-b-[1px] border-b-[#000] cursor-pointer"
          >
            Login
          </button>
        )}
      </div>
    </>
  );
};

export default UserForms;
