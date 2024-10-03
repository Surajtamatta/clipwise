
import React, { useRef,useState,useEffect } from "react";

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

// ResponsiveSVG component
const Buywarves = ({ children }) => {
  const elementRef = useRef(null);

  const { width, height } = useParentSize(elementRef); // Calculate width & height based on parent

  const aspect = width / height;
  const adjustedHeight = Math.ceil(width / aspect);




  return (
    <div
      ref={elementRef}
      data-selector="cutting-svg-container"
      style={{
        position: "absolute",
        overflow: "hidden",
        height: "100vh", 
        width: "100%", 
        aspectRatio: `${aspect}`,
        top:'0',
        zIndex:-2
      }}
    >
  


         
            <svg
            className="w-full absolute top-0"
            viewBox="0 0 1440 900"
            style={{
                width: "100%", 
            }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path 
            d="M780.5 719.289C996.132 691.392 1205.06 380.14 1440 254.604V-6.10352e-05H0V900C0 900 124.358 896.153 250 817.997C395.056 727.764 564.868 747.186 780.5 719.289Z" fill="white"/>
            </svg>


            <svg
            className="w-full h-full  absolute mix-blend-normal -z-10"
            viewBox={`0 0 ${width} ${adjustedHeight}`} // Dynamically set the viewBox
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <rect
                x="0"
                y="0"
                width={`${width}`}
                height={`${adjustedHeight}`}
                fill="url(#paint0_linear_1_9)"
            />
            <defs>
                <linearGradient id="paint0_linear_1_9" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8381ffe4"/>
                <stop offset="0.484953" stopColor="#2ef3fddb"/>
                <stop offset="1" stopColor="#0430a1d1"/>
                </linearGradient>
            </defs>
            
            </svg>
    </div>
  );
};

export default Buywarves;
