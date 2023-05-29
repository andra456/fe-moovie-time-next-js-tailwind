import React from "react";
import { AiFillStar } from "react-icons/ai";
import Button from "./Buttons";
import { useRouter } from "next/router";

type Props = {
  bg?: string;
  className: string;
  src?: string;
};
export const Img: React.FC<Props> = ({ src, className }) => {
  return (
    <div
      className={`relative bg-center bg-no-repeat bg-cover ${className}`}
      style={{ backgroundImage: `url(${src})` }}
    ></div>
  );
};

export const AttributesCover = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <div className="cover-hover flex flex-col items-center justify-center text-white transition-all bg-black/[.8] opacity-0 hover:opacity-100 z-10 absolute top-0 left-0 w-full h-full">
        <div className="rating flex items-center my-2 text-[24px] font-semibold">
          <AiFillStar className="mr-2 fill-[#FFB802]" />
          {data.rating}
        </div>
        <div className="genre my-2 text-[18px] font-semibold">Action</div>
        <Button
          onClick={() =>
            router.push("/watch/" + data.id, undefined, { shallow: true })
          }
          className="my-2 px-8 py-1 text-[17px] bg-[#FF0000] text-white rounded-full"
        >
          view
        </Button>
      </div>
    </>
  );
};

export const Poster = ({ attributCover = null, bg, data = null }) => {
  return (
    <div className="item relative">
      {data && (
        <div className="label-rate px-3 py-1 top-0 right-0 absolute text-[18px] text-white font-bold z-10 bg-[#1E232B]/[.8]">
          {data.rating}
        </div>
      )}
      <div className="relative image-cover">
        {attributCover}
        <Img src={bg} className="relative pb-[150%]" />
      </div>
      {data && (
        <div className="metadata text-white pt-5">
          <h3 className="title text-[16px] font-semibold">{data.title}</h3>
          <span className="years text-[14px] text-[#929292]">{data.years}</span>
        </div>
      )}
    </div>
  );
};
