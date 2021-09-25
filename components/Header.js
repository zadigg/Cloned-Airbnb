import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  UserIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 grid grid-cols-3 shadow-md p-5 md:px-10">
      {/* left */}
      <div className=" relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Mid */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-xs text-gray-600 placeholder-gray-400 "
          type="text"
          placeholder="Start your search"
          name=""
          id=""
        />
        <SearchIcon className="hidden md:inline-flex bg-red-600 h-8 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center p-2 rounded-full space-x-2 border-2 border-gray-300">
          <MenuIcon className="h-6 " />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
