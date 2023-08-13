"use client";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Home() {
 
  const router = useRouter();

  async function handleLogout() {
    const response = await axios.get("/api/users/logout");
    toast.success(response.data.msg);
    router.push("/login");
  }

  return (
    <>
      <section className="h-screen w-full flex justify-center items-center">
        <div className=" flex gap-4  justify-center items-center bg-gray-100 shadow-xl p-5 rounded-sm border-solid border-1">
          <div>
            <Link
              href="/profile"
              className=" text-white py-2 px-4 bg-slate-700 hover:bg-slate-900 rounded-md hover:shadow-xl transition-all duration-200"
            >
              My Profile
            </Link>
          </div>

          <div>
            <Link
              href="#"
              onClick={handleLogout}
              className=" text-white py-2 px-4 bg-slate-700 hover:bg-slate-900 rounded-md hover:shadow-xl transition-all duration-200"
            >
              Logout
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
