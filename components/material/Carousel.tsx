import { Swiper, SwiperSlide } from "swiper/react";
import { cx } from "@emotion/css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

// Data
type PropsCarousel = {
  data: any[];
  componentItem: (e) => JSX.Element;
  classNameNav?: string;
  classNameContainer?: string;
  gap?: number;
};

export default function Carousel({
  data,
  classNameNav = "",
  classNameContainer = "",
  gap = 30,
  componentItem,
}: PropsCarousel) {
  const Items = (e: any) => componentItem(e);
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={gap}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        modules={[Pagination, Navigation]}
        className={cx("swiper", classNameNav)}
      >
        {data?.map((e, i) => (
          <SwiperSlide className={classNameContainer} key={i}>
            <Items {...e} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
