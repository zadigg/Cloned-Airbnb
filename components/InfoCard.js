import { HeartIcon, StarIcon } from "@heroicons/react/outline";
import Image from "next/image";

function InfoCard({ img, title, desc, total, star, price, location }) {
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t ">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          className="rounded-3xl"
          src={img}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex items-center justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2"></div>
        <p className="p-2 text-sm text-gray-500 flex-grow">{desc}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>

          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
