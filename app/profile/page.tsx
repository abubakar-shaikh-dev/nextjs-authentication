"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function ProfilePage() {
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
      <section className="h-screen w-full flex justify-center items-center">
        <div className="bg-gray-100 shadow-xl p-5 rounded-sm border-solid border-1">
          <div className="flex gap-2 my-3">
            <p>Name: </p>
            <p>{user?.name}</p>
          </div>

          <div className="flex gap-2 my-3">
            <p>Email: </p>
            <p>{user?.email}</p>
          </div>
          <Link
            href="/"
            className=" text-white py-2 px-4 bg-slate-700 hover:bg-slate-900 rounded-md hover:shadow-xl transition-all duration-200"
          >
            Go Home
          </Link>
        </div>
      </section>
    </>
  );
}
