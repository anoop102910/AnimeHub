import Image from "next/image";
import React from "react";

function Home() {
  return (
    <div className="md:flex  justify-between items-center">
      <div className="md:w-[40%] relative">
        <h1 className="text-6xl font-bold leading-[3.8rem] bg-title">Better Design for your digital products</h1>
        <p className="text-lg mt-10">
          Turning your Idea into Reality. We bring together the teams from Industry
        </p>
        <button className="bg-green-700 px-4 py-2 roumd text-sm rounded-md mt-4 text-white hover:-translate-y-1 transition-all">See our works</button>
      </div>
      <Image className="animate-float" width="600" height="600" src="/hero2.png" alt="" />
    </div>
  );
}
export default Home;
