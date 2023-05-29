import Button from "@/components/items/Buttons";
import { Poster, AttributesCover } from "@/components/items/Card";
import Container from "@/components/items/Container";
import { useAppContext } from "@/libs/contexts/store";
import { posterPaths } from "@/libs/constant/apiURL";

export default function ExploreSectionTwo() {
  const { globalState } = useAppContext();
  const content = globalState;
  return (
    <Container>
      <div className="container">
        <div className="header-movies flex justify-between items-center">
          <h1 className="title-movies text-[24px] text-white font-semibold relative py-5">
            <span className="divider absolute top-0 left-0 block bg-[#FF0000] h-1 w-[120px]"></span>
            Discover Movies
          </h1>
          <div className="sort grid grid-cols-2 gap-4">
            <Button className="px-5 py-1 text-[12px] bg-[#FF0000] flex justify-center text-white rounded-full">
              Populaity
            </Button>
            <Button className="px-5 py-1 text-[12px] bg-black/[.2] flex justify-center text-white rounded-full">
              Release Date
            </Button>
          </div>
        </div>
        <div className="listing-content mt-10 w-full grid grid-cols-5 gap-5">
          {content?.all.map((e, i) => (
            <Poster
              data={{
                title: e.original_title,
                rating: e.vote_average,
                years: 2000,
              }}
              key={i}
              bg={posterPaths + e.poster_path}
              attributCover={
                <AttributesCover
                  data={{
                    title: e.original_title,
                    rating: e.vote_average,
                    id: e.id,
                  }}
                />
              }
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
