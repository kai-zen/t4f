import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./DataProvider";
import Loading from "./Loading";
import CarouselItem from "./CarouselItem";
import IconChevronLeft from "./IconChevronLeft";
import Button from "./Button";
import { productDataType } from "@/types";
import { shuffleArray } from "@/functions";

const Carousel: React.FC = () => {
  const data = useContext(DataContext);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [showingItems, setshowingItems] = useState<productDataType[]>(
    data || []
  );

  const updateItemsPerView = () => {
    if (window.innerWidth >= 1024) {
      setItemsPerView(3);
    } else if (window.innerWidth >= 640) {
      setItemsPerView(2);
    } else {
      setItemsPerView(1);
    }
  };

  useEffect(() => {
    if (data && data.length > 0) setshowingItems(data);
  }, [data]);

  useEffect(() => {
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  if (!data) return <Loading />;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= Math.ceil(data.length / itemsPerView) - 1
        ? prevIndex
        : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
        }}
      >
        {showingItems.map((product) => (
          <CarouselItem data={product} key={product.id} />
        ))}
      </div>
      <button
        onClick={handlePrev}
        className={`${iconButtonStyle} left-0 ${
          currentIndex > 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        <IconChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className={`${iconButtonStyle} right-0 rotate-180 ${
          currentIndex < Math.ceil(data.length / itemsPerView) - 1
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        <IconChevronLeft />
      </button>
      <div className="flex w-full justify-center mt-4">
        <Button
          onClick={() => {
            setshowingItems((prev) => shuffleArray(prev));
          }}
        >
          Shuffle!
        </Button>
      </div>
    </div>
  );
};

const iconButtonStyle =
  "absolute top-1/2 transform -translate-y-1/2  bg-red-500 border-2 border-white text-white p-2 rounded-full transition-opacity";

export default Carousel;
