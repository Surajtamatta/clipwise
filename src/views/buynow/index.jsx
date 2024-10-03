import React from "react";
import { Button } from "@/components/ui/button";
import Buywarves from "@/components/svg/Buywarves";
import Image from "next/image";
import { imagesdata } from "@/json/imagesdata";
import HalfCircle from "@/svg/HalfCircle";

const BuyNow = () => {
  return (
    <div className="w-full py-11  flex justify-center items-center relative flex-col overflow-hidden">
    
        <div className=" w-full h-full  grid grid-cols-2 p-4  md:px-10 max-sm:grid-cols-1 gap-4 place-items-center relative">
        <Buywarves/>
            <div className="w-full flex justify-center max-sm:items-center items-end flex-col gap-8 text-right">
                    <h1 className=" text-4xl leading-10 text-[#31546D] max-sm:text-center">
                    BEST PRICE <br/>
                    <span className="font-bold  md:text-6xl md:leading-[65px] "> Agate Phone Grip</span>
                    </h1>
                    <h1 className="flex  justify-center items-center gap-2 text-2xl leading-10 text-[#41A0B7] ">
                    44.50$ <br/>
                    <span className="font-bold font md:text-7xl md:leading-[65px] text-[#E35B3E]"> 19.50$</span>
                    </h1>
                    <p className="text-base w-full   text-shade-500 max-sm:text-center text-balance max-w-[400px] text-right">These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
                    </p>
                    
                    <div className="p-[3px] hover:bg-gredientbutton bg-white rounded-[18px] group">
                    <Button variant='ghost' className="bg-gredientbutton group-hover:bg-transparent  py-5 px-10">
                      <h1 className="group-hover:bg-gredientbutton group-hover:bg-clip-text group-hover:text-transparent font-bold text-white ">
                        BUY NOW
                      </h1>
                    </Button>
                    </div>
            </div>

               <HalfCircle className="w-full">
                      <Image src={imagesdata[0].src} alt={imagesdata[0].alt} width={600} height={600}  
                      className= 'w-full max-w-44  md:max-w-64 h-auto aspect-square bg-white rounded-full '/>
                  </HalfCircle>
         
               
            
        </div>

  </div>
)
};

export default BuyNow;
