import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { MdMovie, MdSearch } from "react-icons/md";
import { useAppContext } from "@/libs/contexts/store";
import { useDispatch, TypesActions } from "@/libs/contexts/action";
import _ from "lodash";

const GetKeyword = (text: string, query: string) => {
  const word =
    query !== "" && text !== ""
      ? text.toLocaleLowerCase().split(query.toLocaleLowerCase())
      : [];

  const joinString = word?.map((e, i) => (
    <>
      <span>{e}</span>
      {word.length !== i + 1 && <b>{query.toLocaleLowerCase()}</b>}
    </>
  ));
  return <div className="capitalize">{joinString}</div>;
};

export default function Search() {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");
  const { globalState } = useAppContext();
  const { mutations } = useDispatch();

  const filtered =
    query === ""
      ? globalState?.search
      : globalState?.search?.filter((movie) => {
          return movie.title
            ?.toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""));
        });

  return (
    <div className="max-w-[571px] w-[100%] lg:mx-10 md:mx-auto">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <div className="absolute inset-y-0 left-2 flex items-center pr-2">
              <MdMovie className="h-5 w-5 text-gray-400" />
            </div>
            <Combobox.Input
              placeholder="Find movie"
              className="w-full border-none outline-none rounded bg-black/[.13] py-2 pl-10 pr-10 text-sm leading-5 text-[#E5E5E5] focus:ring-0"
              displayValue={(movie: any) => movie.title}
              onChange={(event) => {
                setQuery(event.target.value);

                mutations.mutateAsync({
                  type: TypesActions.search,
                  payload: { query: event.target.value },
                  method: "GET",
                });
              }}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <MdSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </Combobox.Button>
          </div>
          {query !== "" ? (
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filtered.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filtered?.slice(0, 5).map((movie) => (
                    <Combobox.Option
                      key={movie.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-5 pr-4 ${
                          active ? "text-white" : "text-white/90"
                        }`
                      }
                      value={movie.id}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {GetKeyword(movie.title, query)}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 text-white`}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          ) : null}
        </div>
      </Combobox>
    </div>
  );
}
