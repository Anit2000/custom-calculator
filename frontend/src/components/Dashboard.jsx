import React from "react";
import { Logo } from "../assets/Icons";
const DashBoard = () => {
  return (
    <div className="grid grid-rows-3 grid-cols-6 h-full">
      <nav className="col-span-1 row-span-3 pt-6 bg-indigo-600">
        <div className="px-6 mb-6">
          <Logo class="w-[40px] h-[40px] mr-auto stroke-white" />
        </div>
        <div className="px-2 mb-6">
          <div className=" flex font-medium items-center px-4 py-2 bg-indigo-700 rounded text-sm text-white">
            <svg
              className="h-6 mr-4"
              viewBox="0 0 512 512"
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z"
                fill="currentColor"
              />
            </svg>
            Home
          </div>
          <div className="flex font-medium items-center hover:bg-indigo-700 px-4 py-2 rounded text-sm text-white">
            <svg
              className="h-6 mr-4"
              viewBox="0 0 512 512"
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            Search
          </div>
          <div className="flex font-medium items-center px-4 py-2 rounded text-sm hover:bg-indigo-700 text-white">
            <svg
              className="h-6 mr-4"
              viewBox="0 0 512 512"
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
                fill="currentColor"
              />
            </svg>
            Your Library
          </div>
        </div>
        <div>
          <h3 className="text-xs text-gray-100 uppercase text-white px-6 tracking-widest font-light mb-4">
            Playlists
          </h3>
          <div className="mb-3">
            <div className="px-6 py-1 flex items-center text-sm text-white opacity-50 hover:opacity-100">
              <svg
                className="bg-white fill-current h-8 mr-4 p-1 text-black w-8"
                shapeRendering="crispEdges"
                viewBox="0 0 36 36"
              >
                <path d="m28 20h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z" />
              </svg>
              Create Playlist
            </div>
            <div className="px-6 py-1 flex items-center text-sm text-white opacity-50 hover:opacity-100">
              <svg
                className="bg-liked-songs fill-current h-8 mr-4 p-2 w-8"
                viewBox="0 0 20 20"
              >
                <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
              </svg>
              Liked Songs
            </div>
          </div>
          <hr className="border-gray-200 mx-6 mb-3" />
          <div>
            <div className="px-6 py-2 flex items-center text-sm text-white text-gray-100 hover:text-white">
              Liked from Radio
            </div>
            <div className="px-6 py-2 flex items-center text-sm text-white text-gray-100 hover:text-white">
              Discover Weekly
            </div>
          </div>
        </div>
      </nav>
      <main className="col-span-5 row-span-3 overflow-auto">
        <header className="px-6 py-4 mb-6 shadow-[0_1px_2px_0_rgb(0_0_0/0.05)] border-[1px] border-[rgb(229_231_235)] flex items-center justify-between sticky top-0 z-10">
          <div className="ml-auto text-black">Jedidiah Avelino</div>
        </header>
        <section className="px-6 grid gap-6 mb-8">
          <div className="flex items-center">
            <div className="flex-1">
              <h3 className="text-2xl text-white">
                <a
                  className="border-b border-transparent hover:border-white"
                  href=""
                >
                  Recently played
                </a>
              </h3>
            </div>
            <div>
              <a
                className="text-xs text-gray-100 tracking-widest uppercase hover:underline"
                href=""
              >
                See all
              </a>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4">
            <div className="bg-gray-200 rounded-lg p-5">
              <div className="relative pt-full mb-4">
                <img
                  className="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=1"
                  alt=""
                />
              </div>
              <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                Chinese Lo-FI
              </div>
              <div className="relative pb-5">
                <span className="text-xs text-gray-100 text-line-clamp-1">
                  By @Nike1nike
                </span>
                <button className="absolute right-0 top-0 w-10 h-10 bg-green-200 rounded-full flex text-white">
                  <svg
                    className="fill-current h-5 w-5 m-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-5">
              <div className="relative pt-full mb-4">
                <img
                  className="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=2"
                  alt=""
                />
              </div>
              <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                FLY
              </div>
              <div className="relative pb-5">
                <span className="text-xs text-gray-100 text-line-clamp-1">
                  Gaho
                </span>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-5">
              <div className="relative pt-full mb-4">
                <img
                  className="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=3"
                  alt=""
                />
              </div>
              <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                Ludwig van Beethoven
              </div>
              <div className="relative pb-5">
                <span className="text-xs text-gray-100 text-line-clamp-1">
                  Artist
                </span>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-5">
              <div className="relative pt-full mb-4">
                <img
                  className="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=4"
                  alt=""
                />
              </div>
              <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                Hotel Del Luna OST
              </div>
              <div className="relative pb-5">
                <span className="text-xs text-gray-100 text-line-clamp-1">
                  By Jamie Lee
                </span>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-5">
              <div className="relative pt-full mb-4">
                <img
                  className="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=5"
                  alt=""
                />
              </div>
              <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                ITAEWON CLASS (Original Television Soundtrack) Pt.2
              </div>
              <div className="relative pb-5">
                <span className="text-xs text-gray-100 text-line-clamp-1">
                  Gaho
                </span>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-5">
              <div className="relative pt-full mb-4">
                <img
                  className="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=6"
                  alt=""
                />
              </div>
              <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                Preparation For a Journey
              </div>
              <div className="relative pb-5">
                <span className="text-xs text-gray-100 text-line-clamp-1">
                  Gaho
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 grid gap-6 mb-8">
          <div className="flex items-center">
            <div className="flex-1">
              <h3 className="text-2xl text-white">Your heavy rotation</h3>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4">
            <div className="bg-gray-200 rounded-lg p-5">
              <div className="relative pt-full mb-4">
                <img
                  className="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=1"
                  alt=""
                />
              </div>
              <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                Solid ug lawas
              </div>
              <div className="relative pb-5">
                <span className="text-xs text-gray-100 text-line-clamp-1">
                  By Archie Mari Evardo
                </span>
                <button className="absolute right-0 top-0 w-10 h-10 bg-green-200 rounded-full flex text-white">
                  <svg
                    className="fill-current h-5 w-5 m-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-5">
              <div className="relative pt-full mb-4">
                <img
                  className="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=2"
                  alt=""
                />
              </div>
              <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                BLOO
              </div>
              <div className="relative pb-5">
                <span className="text-xs text-gray-100 text-line-clamp-1">
                  Artist
                </span>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-5">
              <div className="relative pt-full mb-4">
                <img
                  className="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=3"
                  alt=""
                />
              </div>
              <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                Instrumental Breakfast Jazz Playlist
              </div>
              <div className="relative pb-5">
                <span className="text-xs text-gray-100 text-line-clamp-1">
                  Jazz Morning Playlist
                </span>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-5">
              <div className="relative pt-full mb-4">
                <img
                  className="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=4"
                  alt=""
                />
              </div>
              <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                Hotel Del Luna OST
              </div>
              <div className="relative pb-5">
                <span className="text-xs text-gray-100 text-line-clamp-1">
                  By Jamie Lee
                </span>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-5">
              <div className="relative pt-full mb-4">
                <img
                  className="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=5"
                  alt=""
                />
              </div>
              <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                ITAEWON CLASS (Original Television Soundtrack) Pt.2
              </div>
              <div className="relative pb-5">
                <span className="text-xs text-gray-100 text-line-clamp-1">
                  Gaho
                </span>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-5">
              <div className="relative pt-full mb-4">
                <img
                  className="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=6"
                  alt=""
                />
              </div>
              <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                Preparation For a Journey
              </div>
              <div className="relative pb-5">
                <span className="text-xs text-gray-100 text-line-clamp-1">
                  Gaho
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 grid gap-6 mb-8">
          <div className="flex items-center">
            <div className="flex-1">
              <h3 className="text-2xl text-white">
                <a
                  className="border-b border-transparent hover:border-white"
                  href=""
                >
                  Made for Jedidiah
                </a>
              </h3>
            </div>
            <div>
              <a
                className="text-xs text-gray-100 tracking-widest uppercase hover:underline"
                href=""
              >
                See all
              </a>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4">
            <div className="bg-gray-200 rounded-lg p-5">
              <div className="relative pt-full mb-4">
                <img
                  className="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=1"
                  alt=""
                />
              </div>
              <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                Chinese Lo-FI
              </div>
              <div className="relative pb-5">
                <span className="text-xs text-gray-100 text-line-clamp-1">
                  By @Nike1nike
                </span>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-5">
              <div className="relative pt-full mb-4">
                <img
                  className="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=2"
                  alt=""
                />
              </div>
              <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                FLY
              </div>
              <div className="relative pb-5">
                <span className="text-xs text-gray-100 text-line-clamp-1">
                  Gaho
                </span>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-5">
              <div className="relative pt-full mb-4">
                <img
                  className="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=3"
                  alt=""
                />
              </div>
              <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                Ludwig van Beethoven
              </div>
              <div className="relative pb-5">
                <span className="text-xs text-gray-100 text-line-clamp-1">
                  Artist
                </span>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-5">
              <div className="relative pt-full mb-4">
                <img
                  className="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=4"
                  alt=""
                />
              </div>
              <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                Hotel Del Luna OST
              </div>
              <div className="relative pb-5">
                <span className="text-xs text-gray-100 text-line-clamp-1">
                  By Jamie Lee
                </span>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-5">
              <div className="relative pt-full mb-4">
                <img
                  className="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=5"
                  alt=""
                />
              </div>
              <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                ITAEWON CLASS (Original Television Soundtrack) Pt.2
              </div>
              <div className="relative pb-5">
                <span className="text-xs text-gray-100 text-line-clamp-1">
                  Gaho
                </span>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-5">
              <div className="relative pt-full mb-4">
                <img
                  className="block w-full absolute inset-0"
                  src="https://picsum.photos/129.webp?random=6"
                  alt=""
                />
              </div>
              <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                Preparation For a Journey
              </div>
              <div className="relative pb-5">
                <span className="text-xs text-gray-100 text-line-clamp-1">
                  Gaho
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashBoard;
