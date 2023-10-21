import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import { useAuth } from "../helpers/authContext";

const Settings = () => {
  const { user } = useAuth();
  let [domain, setDomain] = useState("");
  let [accessToken, setAccessToken] = useState("");
  const saveSettings = async () => {
    let data = {
      user: user.id,
      domain,
      accessToken,
    };
    let resData = await fetch("/api/saveSettings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    console.log(resData);
  };
  const getSettings = async () => {
    fetch("/api/getSettings")
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setDomain(data.domain);
          setAccessToken(data.accessToken);
        }
      });
  };
  useEffect(() => {
    getSettings();
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Store name"
        name="domain"
        type="text"
        value={domain}
        placeholder="Enter store name"
        onchange={(e) => {
          setDomain(e.target.value);
        }}
      />
      <Input
        label="Access Token"
        type="password"
        name="accessToken"
        value={accessToken}
        onchange={(e) => {
          setAccessToken(e.target.value);
        }}
        placeholder="Enter store access token"
      />
      <button
        onClick={saveSettings}
        className="flex w-full justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 h-[40px] max-w-[150px]"
      >
        Update
      </button>
    </div>
  );
};

export default Settings;
