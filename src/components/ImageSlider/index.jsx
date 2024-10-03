import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { imagesdata } from "@/json/imagesdata";
import { Button } from "../ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"

const ImageSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState(null); 
  useEffect(() => {
    if (!api) return;
    api.scrollTo(activeIndex);
  }, [api,activeIndex,]);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? imagesdata.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === imagesdata.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-[569px]">
      {/* Carousel */}
      <div className="bg-white w-full  flex justify-center relative rounded-[50px] aspect-square shadow-slidershadow">
        <Carousel
          className="w-full h-full"
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnFocusIn: true,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent className="w-full h-full">
            {imagesdata.map((image, index) => (
              <CarouselItem
                key={image.id}
                className="w-full h-full p-6 md:p-12 flex justify-between items-center flex-col relative cursor-pointer"
              >
                <div className="bg-indigo-400 px-3 py-1 md:px-5 md:py-2 rounded-e-md text-base text-white top-16 left-0 absolute">
                  {image.new}
                </div>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={600}
                  className={`h-full w-auto aspect-square ${
                    index === activeIndex ? "active" : "inactive"
                  }`}
                />
                <hr className="w-1/4 mt-4 h-2 rounded-sm text-slate-300 block" />
                <h1 className="text-lg text-slate-500 uppercase text-balance text-center">
                  {image.name}
                  <span className="text-xl font-bold text-cyan-700">
                    {" "}
                    - {image.price}
                  </span>
                </h1>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Navigation Buttons Outside Carousel */}
      <div className="flex w-full mt-8 space-x-3 justify-center items-center">
        <Button
          variant = "arrowicon"
          onClick={handlePrevious}
          className="px-2 py-2 bg-indigo-400 text-white h-7 w-7 rounded-md"
        >
            <ArrowLeftIcon className="h-4 w-4 text-white" />
        </Button>
        {imagesdata.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === activeIndex ? "bg-indigo-400" : "bg-indigo-200"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
        <Button
          variant = "arrowicon"
          onClick={handleNext}
          className="px-2 py-2 bg-indigo-400 text-white h-7 w-7 rounded-md"
        >
          <ArrowRightIcon className="h-4 w-4 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default ImageSlide;
