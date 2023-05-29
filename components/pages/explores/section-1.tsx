import React from "react";
import { Poster } from "@/components/items/Card";
import Carousel from "@/components/material/Carousel";
import { useAppContext } from "@/libs/contexts/store";
import { useDispatch, TypesActions } from "@/libs/contexts/action";
import { AiFillStar } from "react-icons/ai";
import { carousel } from "./_indexStyle";
import { posterPaths } from "@/libs/constant/apiURL";

const ItemsCarousel = (e) => {
  return (
    <div className="block h-[364px] relative flex items-center">
      <div className="image-poster min-w-[243px]">
        <Poster bg={posterPaths + e.poster_path} />
      </div>
      <div className="metadata bg-black text-white h-[300px] pt-5 px-6">
        <div className="movie-info">
          <p className="movie-stars flex items-center font-semibold">
            <AiFillStar className="mr-2 fill-[#FFB802]" /> {e.vote_average}
          </p>
          <div className="movie-head font-semibold text-[28px]">
            <h1 className="movie-title">{e.original_title}</h1>
          </div>

          <div className="movie-subdata flex leading-loose">
            <div className="movie-right mr-6">{e.release_date.split("-")} </div>
            <ul className="movie-taxonomy list-disc">
              <li>Adventure</li>
            </ul>
          </div>

          <p className="movie-description text-[12px] leading-[20px]">
            {e.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function ExploreSectionOne() {
  const { globalState } = useAppContext();
  const { mutations } = useDispatch();
  const content = globalState;

  React.useEffect(() => {
    mutations.mutate({ type: TypesActions.all, payload: {}, method: "GET" });
  }, []);

  return (
    <div className="block w-full">
      <div className="carousel-container bg-black/[.13] pt-[4em] pb-[6em]">
        <Carousel
          data={content?.all.slice(0, 4)}
          componentItem={ItemsCarousel}
          classNameContainer=""
          classNameNav={carousel}
        />
      </div>
    </div>
  );
}
