"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function profileData() {
  interface userType {
    id: string;
    name: string;
    email: string;
  }

  const [user, setUser] = useState<userType>({
    id: "",
    name: "",
    email: "",
  });

  const getUser = async () => {
    const response = await axios.get("/api/users/profile");
    setUser(response.data.user[0]);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="flex gap-2 my-3">
        <p>Name: </p>
        <p>{user?.name}</p>
      </div>

      <div className="flex gap-2 my-3">
        <p>Email: </p>
        <p>{user?.email}</p>
      </div>
    </>
  );
}
