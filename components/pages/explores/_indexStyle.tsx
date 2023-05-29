import { css } from "@emotion/css";

export const carousel = css`
  padding-bottom: 50px;
  .swiper-slide {
    opacity: 0.4;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  .swiper-slide-active {
    opacity: 1;
  }

  .swiper-pagination {
    bottom: 0;
    position: absolute;
    text-align: center;
    transition: 0.3s opacity;
    transform: translate3d(0, 0, 0);
    z-index: 20;
    .swiper-pagination-bullet {
      background: rgba(255, 255, 255, 0.5);
      &.swiper-pagination-bullet-active {
        width: 40px;
        border-radius: 8px;
        background: #e74c3c;
      }
    }
  }
`;
