import { Poster, AttributesCover } from "@/components/items/Card";
import Container from "@/components/items/Container";
import { useAppContext } from "@/libs/contexts/store";
import { posterPaths } from "@/libs/constant/apiURL";

export default function WatchSectionThree() {
  const { globalState } = useAppContext();
  const content = globalState;
  return (
    <section className=" min-h-[500px] w-full pt-[20px]">
      <Container>
        <h1 className="review uppercase text-[18px] font-semibold text-white leading-loose mb-5">
          RECOMMENDATION MOVIES
        </h1>
        <div className="listing-content mt-10 w-full grid grid-cols-5 gap-4">
          {content?.all?.slice(0, 5).map((e, i) => (
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
      </Container>
    </section>
  );
}
