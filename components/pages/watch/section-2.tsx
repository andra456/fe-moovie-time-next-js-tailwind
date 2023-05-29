import Button from "@/components/items/Buttons";
import { Img, Poster } from "@/components/items/Card";
import Container from "@/components/items/Container";
import { AiFillStar } from "react-icons/ai";

const ReviewItems = (props) => {
  return (
    <div className="item-box-review block px-5 py-5 shadow-md bg-[#F9F9F9] rounded-md text-black">
      <div className="head flex justify-between mb-5">
        <div className="avatar flex items-center">
          <img className="rounded-full bg-[#1E232B]/[.21] w-[48px] h-[48px] mr-5" />
          <div className="profil">
            <h3 className="name font-bold text-[14] ">Ronaldino wq</h3>
            <span className="date font-medium text-[12px]">12, Maret 2022</span>
          </div>
        </div>

        <div className="score flex bg-[#C4C4C4]/[.28] px-4 py-2 rounded-md justify-center">
          <AiFillStar className="text-[16px] text-[#FFB802]" />
          <span className="text-[36px] font-semibold">7.6</span>
        </div>
      </div>
      <div className="content text-[13px] leading-normal italic">
        It isn`t as easy as saying is a good or bad movie. The pieces are there,
        and there are moments I adore, but it does come across as a bit of a
        mess, even though the action sequences are breathtaking. If a fan of the
        original film, be more willing to take the ride, but for those more
        indifferent, it may be a bit of a blander sit. If you can and are
        planning to watch it, the theatrical experience is the way to go - there
        is nothing like seeing these stunning sets, fun action scenes and
        hearing jaw-dropping score like on the big screen. - Chris dos Santos...
        read the rest.
      </div>
    </div>
  );
};
export default function WatchSectionOne() {
  return (
    <section className="bg-white min-h-[500px] w-full pt-[170px]">
      <Container>
        <h1 className="review uppercase text-[18px] font-semibold text-[#FF0000] leading-loose mb-5">
          REVIEWS
        </h1>

        <div className="content-review grid grid-cols-2 gap-10 ">
          {[1, 2].map((e, i) => (
            <ReviewItems key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
