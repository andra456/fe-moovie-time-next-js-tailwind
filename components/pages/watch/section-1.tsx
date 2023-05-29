import { Poster } from "@/components/items/Card";
import Container from "@/components/items/Container";
import { AiFillStar } from "react-icons/ai";
import { useAppContext } from "@/libs/contexts/store";
import { backgroundPaths, posterPaths } from "@/libs/constant/apiURL";
import React from "react";

import { cx, css } from "@emotion/css";

export default function WatchSectionOne() {
  const { globalState } = useAppContext();
  const content = globalState;
  const styleBg = css`
    background-size: 100% !important;
    background-repeat: no-repeat;
    background-position: center;
    background: url(${backgroundPaths + "/" + content.detail?.backdrop_path});
    opacity: 0.2;
  `;

  return (
    <div>
      <header className="-mt-[64px]">
        <div className={`relative h-[541px]`}>
          <div
            className={cx(
              "bg-header block absolute top-0 left-0 w-full h-full",
              styleBg
            )}
          ></div>
          <div className="box-movies w-full absolute left-0 bottom-0 h-[220px]">
            <div className="container-image absolute left-0 top-0 w-full">
              <Container className="flex items-center">
                <div className="poster w-[220px] relative z-10 shadow-md">
                  <Poster bg={posterPaths + content.detail?.poster_path} />
                </div>
              </Container>
            </div>

            <div className="metadata text-white">
              <Container className="flex items-center">
                <div className="description ml-5 pl-[220px]">
                  <div className="years text-[17px]">2020</div>
                  <div className="title text-[36px] text-semibold">
                    {content.detail?.original_title}
                  </div>
                  <div className="genre text-[14px]">Action, Comedy</div>
                </div>
              </Container>

              <div className="scoring-budged -mt-3 h-[68px] w-full relative">
                <div className="list-bg-budget bg-black/50 absolute w-full h-[68px] top-4 left-0"></div>
                <Container className="flex items-center">
                  <ul className="listing flex items-center pl-[220px] ml-5 relative">
                    <li className="uppercase flex items-center ">
                      <div className="rating flex items-center font-semibold text-[36px]">
                        <AiFillStar className="mr-2 fill-[#FFB802]" />
                        {content.detail?.vote_average}
                      </div>
                      <div className="score text-white/50 text-[12px] px-5">
                        <span>User Score</span>
                        <p className="score text-white font-medium">
                          {content.detail?.vote_count | 0} Votes
                        </p>
                      </div>
                    </li>
                    <li className="uppercase text-white/50 text-[12px] px-5 border-l border-white/50">
                      language
                      <p className="score text-white font-medium">english</p>
                    </li>
                    <li className="uppercase text-white/50 text-[12px] px-5 border-l border-white/50">
                      budget
                      <p className="score text-white font-medium">
                        $ 2.000.000
                      </p>
                    </li>
                    <li className="uppercase text-white/50 text-[12px] px-5 border-l border-white/50">
                      production
                      <p className="score text-white font-medium">
                        DC Entertainment
                      </p>
                    </li>
                  </ul>
                </Container>
              </div>
              <Container className="flex items-center">
                <div className="overviews pl-[220px] ml-5 mt-3">
                  <h2 className="uppercase text-[18px] font-semibold text-[#FF0000]">
                    Overview
                  </h2>
                  <p className="text-[14px] leading-loose max-w-[525px] text-black">
                    {content.detail?.overview?.substr(100)}...
                  </p>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
