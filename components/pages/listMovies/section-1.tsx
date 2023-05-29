import Button from "@/components/items/Buttons";
import { Poster, AttributesCover } from "@/components/items/Card";
import CheckBoxItems from "@/components/items/CheckItems";
import Container from "@/components/items/Container";
import MenuList from "@/components/material/MenuList";
import { useAppContext } from "@/libs/contexts/store";
import { posterPaths } from "@/libs/constant/apiURL";
import { menu } from "@/libs/constant";

export default function MoviesSectionOne() {
  const { globalState } = useAppContext();
  const content = globalState;
  const genre = menu.map((e) => {
    return { name: "category", text: e.name, value: e.name };
  });

  return (
    <div className="block relative w-full">
      <div className="header bg-white/[.05] pt-10 pb-[150px] -mb-[170px]">
        <Container>
          <h1 className="title-movies text-[36px] text-white font-semibold relative py-3">
            <span className="divider absolute top-0 left-0 block bg-[#FF0000] h-1 w-[100px]"></span>
            Movies
          </h1>
        </Container>
      </div>
      <Container>
        <div className="flex">
          <div className="category w-[280px] min-w-[280px] pr-5">
            <div className="category-container rounded-md text-white bg-gradient-to-b from-[#0E1723] to-[#0E1723]/[.0]">
              <h4 className="header px-4 py-5 border-b border-white/[.07] font-semibold text-[16px]">
                Sort Result By
              </h4>
              <div className="select relative z-10 px-4 py-5 border-b border-white/[.07]">
                <MenuList />
              </div>
              <h4 className="header px-4 py-5 border-b font-semibold border-white/[.07] text-[16px]">
                Genre
              </h4>
              <div className="list-genre px-4 py-3 text-white text-[14px]">
                {genre.map((e, i) => (
                  <CheckBoxItems size={4} {...e} key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="grow">
            <div className="listing-content w-full grid grid-cols-4 gap-4">
              {content?.all?.map((e, i) => (
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
            <div className="flex justify-center pt-[60px]">
              <Button className="px-5 py-1 text-[12px] bg-[#FF0000] flex justify-center text-white rounded-full">
                Load More
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
