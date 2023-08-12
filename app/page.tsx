import Link from "next/link";

export default function Home() {
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
              href="/profile"
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
