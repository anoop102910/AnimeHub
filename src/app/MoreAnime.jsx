"use client";
import AnimeCard from "@/components/AnimeCard";
import { fetchAnime } from "@/utils/api/fetchAnime";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

let page = 1;
let index = 1;
function MoreAnime() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px 0px 0px" });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    setLoading(true);
    if (inView) {
      async function fetchdata() {
        page++;
        const res = await fetchAnime(page);
        setData(prev => [...prev, ...res]);
        setLoading(false);
      }
      fetchdata();
    }
  }, [inView]);

  return (
    <>
      <div className="mt-16 w-full flex-wrap gap-8  sm:gap-12 md:gap-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {data.map((anime) => {
          index++;
          return <AnimeCard key={anime.id} index={index%8} anime={anime} />;
        })}
      </div>
      <div ref={ref} className="w-full pt-10 flex items-center justify-center ">
        {loading && <img width={56} height={56} src="spinner.svg" alt="" />}
      </div>
    </>
  );
}

export default MoreAnime;
