"use client";
import { useState } from "react";
import Header from "@/components/Header";
import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import MainBody from "@/components/MainBody/MainBody";
import RightSideBar from "@/components/RightSideBar/RightSideBar";

export default function Home() {
  const [value, setValue] = useState("");

  return (
    <>
      <Header />
      <main className="grid grid-cols-[2.5fr_7fr_2.5fr] text-white h-screen">
        <LeftSideBar />
        <MainBody value={value} />
        <RightSideBar value={value} setValue={setValue} />
      </main>
    </>
  );
}
