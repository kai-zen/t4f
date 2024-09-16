import { productDataType } from "@/types";
import { FC } from "react";
import Link from "next/link";

interface propTypes {
  data: productDataType;
  large?: boolean;
}

const theKeys = ["presenter", "city", "price", "rate", "runtime", "type"];
const CarouselItem: FC<propTypes> = ({ data, large }) => {
  return (
    <Link
      href={`/${data.id}`}
      className={`flex-none ${
        large ? "w-full lg:w-[40%]" : "w-full sm:w-1/2 lg:w-1/3 p-2"
      }`}
    >
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          // I added the param to prevent showing same image multiple times by browser cache
          src={`${data.image}/?randomMaker=${data.id}`}
          alt={data.title}
          className="w-full object-cover aspect-video"
        />
        <div className="p-4 flex flex-col gap-4 items-start">
          <h2 className="text-xl font-bold">{data.title}</h2>
          {large ? (
            <div className="flex flex-col gap-1">
              {theKeys.map((k, i) => (
                <p key={i} className="text-gray-600">
                  <span className="font-bold">{k}:</span>&nbsp;
                  {/* @ts-ignore */}
                  {data[k]}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default CarouselItem;
