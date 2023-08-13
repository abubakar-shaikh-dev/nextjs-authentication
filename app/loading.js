"use client";
import { RotatingLines } from "react-loader-spinner";
export default function Loading() {
  return (
    <>
      <section className="flex justify-center items-center h-screen w-full">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="50"
        visible={true}
      />
      </section>
    </>
  );
}
