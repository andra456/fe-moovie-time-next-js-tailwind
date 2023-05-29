import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Apps from "@/assets/svg/ico/app.svg";
import SearchBox from "../material/Search";
import Dropdown from "../material/DropDown";
import { menu } from "@/libs/constant";
import Logo from "@/assets/svg/logo/MoovieTime.svg";
import { useRouter } from "next/router";

const navigation = [
  {
    name: "CATEGORY",
    href: "/movies",
    current: true,
    icon: <Apps />,
    child: menu,
  },
  { name: "MOVIES", href: "/movies", current: false, icon: null, child: null },
  { name: "TV SHOW", href: "/tv", current: false, icon: null, child: null },
  { name: "LOGIN", href: "/auth", current: false, icon: null, child: null },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const router = useRouter();
  return (
    <Disclosure as="nav" className="relative z-50 bg-white/5">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Logo
                    className="h-8 "
                    alt="MoovieTime"
                    onClick={() =>
                      router.push("/explore", undefined, {
                        shallow: true,
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex lg:grow sm:grow-0                                                                               ">
                <SearchBox />
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          onClick={() =>
                            router.push(item.href, undefined, {
                              shallow: true,
                            })
                          }
                          className={classNames(
                            item.current
                              ? "text-white"
                              : "text-[#E5E5E5]  hover:text-white",
                            "flex align-items rounded-md px-3 py-2 text-[14px] font-semibold"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.child ? (
                            <Dropdown
                              menuButton={
                                <>
                                  <span className="mr-2">{item.icon}</span>
                                  {item.name}
                                </>
                              }
                              child={item.child}
                            />
                          ) : (
                            <>
                              <span className="mr-2">{item.icon}</span>
                              {item.name}
                            </>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  onClick={() =>
                    router.push(item.href, undefined, {
                      shallow: true,
                    })
                  }
                  className={classNames(
                    item.current
                      ? "text-white"
                      : "text-[#E5E5E5] hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.icon}
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5"></div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
