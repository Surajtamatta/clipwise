import React from "react";
import Herowaves from "../../components/svg/Herowaves";
import { Button } from "@/components/ui/button";
import ImageSlide from "@/components/ImageSlider";
import { Mouse,Triangle } from 'lucide-react';
const Hero = () => {
  return (
    <div className="p-4 md:px-10 flex justify-center items-center flex-col ">
        <Herowaves/>
            <div className="h-full flex flex-col justify-center items-center ">
            <div className="h-auto grid grid-cols-2  max-sm:grid-cols-1 gap-6 place-items-center ">
                <div className="flex justify-center items-start flex-col gap-8 max-sm:text-center">
                        <h1 className="w-full text-4xl leading-10 text-white max-sm:text-center">
                            Welcome to <br/>
                        <span className="font-bold font md:text-6xl md:leading-[65px]"> Pop Rock Crystal Shop!</span>
                        </h1>
                        <p className="text-base    text-shade-500 md:max-w-[400px] text-balance">Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
                        </p>
                        <div className="flex gap-2 w-full max-sm:justify-center">
                            <Button >SHOP NOW</Button>
                            <Button variant="ghost" >about us</Button>
                        </div>
                </div>
                 
                    <div className="w-full h-auto flex justify-end items-center">
                    <ImageSlide/>
                    </div>


            </div>
            <div className="flex gap-4  justify-center items-center p-2">
              <svg width="28" height="38" viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7C13.6906 7 13.3938 7.12291 13.175 7.3417C12.9562 7.5605 12.8333 7.85724 12.8333 8.16666V10.5C12.8333 10.8094 12.9562 11.1062 13.175 11.325C13.3938 11.5437 13.6906 11.6667 14 11.6667C14.3094 11.6667 14.6061 11.5437 14.8249 11.325C15.0437 11.1062 15.1666 10.8094 15.1666 10.5V8.16666C15.1666 7.85724 15.0437 7.5605 14.8249 7.3417C14.6061 7.12291 14.3094 7 14 7ZM14 2.33333C11.834 2.33333 9.75682 3.19374 8.22527 4.72529C6.69373 6.25684 5.83331 8.33406 5.83331 10.5V17.5C5.83331 19.6659 6.69373 21.7432 8.22527 23.2747C9.75682 24.8062 11.834 25.6667 14 25.6667C16.1659 25.6667 18.2431 24.8062 19.7747 23.2747C21.3062 21.7432 22.1666 19.6659 22.1666 17.5V10.5C22.1666 8.33406 21.3062 6.25684 19.7747 4.72529C18.2431 3.19374 16.1659 2.33333 14 2.33333ZM19.8333 17.5C19.8333 19.0471 19.2187 20.5308 18.1248 21.6248C17.0308 22.7187 15.5471 23.3333 14 23.3333C12.4529 23.3333 10.9692 22.7187 9.87519 21.6248C8.78123 20.5308 8.16665 19.0471 8.16665 17.5V10.5C8.16665 8.9529 8.78123 7.46917 9.87519 6.37521C10.9692 5.28124 12.4529 4.66666 14 4.66666C15.5471 4.66666 17.0308 5.28124 18.1248 6.37521C19.2187 7.46917 19.8333 8.9529 19.8333 10.5V17.5Z" fill="#307189"/>
                <path d="M14.866 36.5C14.4811 37.1667 13.5189 37.1667 13.134 36.5L12.2679 35C11.883 34.3333 12.3642 33.5 13.134 33.5L14.866 33.5C15.6358 33.5 16.117 34.3333 15.7321 35L14.866 36.5Z" fill="#307189"/>
              </svg>
              <h1 className="text-cyan-700 text-base text font-medium">sroll down</h1>
            </div>
            </div>

    </div>
  );
};

export default Hero;
