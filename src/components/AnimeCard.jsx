import React from "react";
import { MotionDiv } from "./MotionDiv";

function AnimeCard({ anime, index }) {
  const variants = {
    hidden: { opacity: 0 },
    animate: { opacity: 1 },
  };
  console.log(index);
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="animate"
      transition={{ delay: index * 0.25 }}
    >
      <div key={anime.id} className="w-full rounded-md overflow-hidden ">
        <img
          className="w-full h-[220px] md:h-[360px] object-cover object-center hover:scale-105 transition duration-100 rounded-md"
          src={`https://shikimori.one/${anime.image.original}`}
          alt=""
        />
        <div className="py-4 ">
          <h2 className="font-bold text-lg italic">{anime.name}</h2>
          <div className="flex gap-x-10 mt-2">
            <div className="flex gap-2 items-center text-red-500">
              <img src="/episodes.svg" alt="" />
              <span>{anime.episodes}</span>
            </div>
            <div className="flex gap-2 items-center text-yellow-500">
              <img src="/star.svg" alt="" />
              <span>{anime.score}</span>
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default AnimeCard;
