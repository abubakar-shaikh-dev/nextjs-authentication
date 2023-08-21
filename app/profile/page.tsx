import Link from "next/link"
import ProfileData from "./profileData"

export default function ProfilePage() {


  return (
    <>
      <section className="h-screen w-full flex justify-center items-center">
        <div className="bg-gray-100 shadow-xl p-5 rounded-sm border-solid border-1">
          <ProfileData />
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
