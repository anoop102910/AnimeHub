import AnimeCard from "@/components/AnimeCard";
import { fetchAnime } from "@/utils/api/fetchAnime";
import MoreAnime from "./MoreAnime";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const page = 1;
async function Home() {
  const data = await fetchAnime(page);
  return (
    <>
    <Hero/>
      <div className="wrapper p-4 md:pt-32 sm:p-4 md:max-w-[1200px] mx-auto text-white ">
        <div className=" w-full flex-wrap gap-8 sm:gap-12 md:gap-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {data.map((anime, index) => {
            return <AnimeCard key={anime.id} index={index} anime={anime} />;
          })}
        </div>
        <MoreAnime />
        <Footer/>
      </div>
    </>
  );
}

export default Home;
