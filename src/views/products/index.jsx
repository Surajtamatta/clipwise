import React, { useRef,useState,useEffect } from "react";
import { imagesdata } from "@/json/imagesdata";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"




const categories = ['All products', 'Accessories', 'Furniture', 'Electronics'];
const sort = ['Price: Low to High', 'Price: High to Low', 'Name: A to Z', 'Name: Z to A'];

const useParentSize = (elementRef) => {
  const [size, setSize] = useState({ width: 500, height: 500 }); // Default size

  useEffect(() => {
    const updateSize = () => {
      if (elementRef.current) {
        const { clientWidth: width, clientHeight: height } = elementRef.current;
        setSize({ width, height });
      }
    };

    // Initial size calculation
    updateSize();

    // Update size on window resize
    window.addEventListener("resize", updateSize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [elementRef]);

  return size;
};

const Products = () => {
  const [filterCategory, setFilterCategory] = useState('All');  // Category filter

  const elementRef = useRef(null);

  const { width, height } = useParentSize(elementRef); // Calculate width & height based on parent
  
  // const aspect = width / height;
  // const adjustedHeight = Math.ceil(width / aspect);

  const [countcard, setcountCard] = useState(0); // Default size
  // useEffect(() => {
  //   const updateSize = () => {
  //     if (elementRef.current) {
  //       const { clientWidth: width} = elementRef.current;
  //       const newWidth = clientWidth/315
  //       setNoShowCard(newWidth);
  //     }
  //   };
  //   updateSize();
  //   window.addEventListener("resize", updateSize);
  //   return () => {
  //     window.removeEventListener("resize", updateSize);
  //   };
  // }, [elementRef]);





  return (
  <div className="p-6 md:p-12 flex justify-center items-center flex-col bg-background">
    <h1 className="text-5xl font-bold text-cyan-700">All product</h1>
    <div className="flex w-full justify-start items-start mt-6 md:gap-5 flex-col md:flex-row gap-2 ">
      <div className="flex gap-4 justify-center items-center">
        <h1>Filter:</h1>
        <Select>
          <SelectTrigger className="w-[130px]">
            <SelectValue placeholder="All Products"  />
          </SelectTrigger>
          <SelectContent>
          {categories.map(category => (
            <SelectItem value={category} key={category} onClick={() => setFilterCategory(category)} className="text-[#31546D]">
              {category}
            </SelectItem>
          ))}
          </SelectContent>
        </Select>

      </div>
      <div className="flex gap-4 justify-center items-center">
        <h1>Sort:</h1>
        <Select>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Price: Low to High" />
          </SelectTrigger>
          <SelectContent>
          {sort.map(category => (
            <SelectItem value={category} key={category} onClick={() => setFilterCategory(category)}>
              {category}
            </SelectItem>
          ))}
          </SelectContent>
        </Select>
      </div>
      </div>

      
      <div   ref={elementRef} className="grid grid-cols-4 gap-4 gap-y-6 p-4">
            {
              imagesdata.map((image,index) => (
                <Card key={index} className=" h-full w-full">
                <CardContent className="py-6 px-4 flex flex-col h-full  gap-4  justify-center items-center">
                  <Image src={image.src} alt={image.alt} width={600} height={600}  
                  className="w-auto h-full aspect-square" 
                  />
                  <div className="flex justify-center items-center flex-col">
                  <h1 className="text-lg text-slate-500 uppercase text-balance text-center">{image.name}</h1>
                  <h1 className="text-xl font-bold text-cyan-700">{image.price}</h1>
                  </div>
                  <div className="p-[3px] hover:bg-gredientbutton rounded-[18px] group">
                  <Button variant="outline" className="py-5 px-10">
                    <h1 className="bg-gredientbutton bg-clip-text text-transparent font-bold group-hover:text-white ">
                      BUY NOW
                    </h1>
                  </Button>
                  </div>
                </CardContent>
              </Card>
              ))
            }
      </div>
      <div className="flex justify-center items-center mt-8">
      <div className="p-[3px] bg-gredientbutton rounded-[18px] group">
        <Button variant="outline" className="py-5 px-10">
          <h1 className="bg-gredientbutton bg-clip-text font-bold text-transparent group-hover:text-white ">
          View All
          </h1>
        </Button>
      </div>
      </div>

  </div>
);
};

export default Products;
