
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
const Herowaves = ({ children }) => {
  const elementRef = useRef(null);

  const { width, height } = useParentSize(elementRef); // Calculate width & height based on parent

  const aspect = width / height;
  const adjustedHeight = Math.ceil(width / aspect);




  return (
    <div
      ref={elementRef}
      data-selector="cutting-svg-container"
      style={{
        // position: "relative",
        position: "absolute",
        overflow: "hidden",
        height: "100vh", // Full height
        width: "100%", // Full width
        aspectRatio: `${aspect}`,
        top:'0', // Maintain aspect ratio
        zIndex:-1
      }}
    >
  
            <svg
            className="w-full h-full  absolute mix-blend-normal"
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

            <svg  
            style={{
                width: "100%", 
            }}
            className="w-full absolute top-0 
            blur-[80px]
            
            "
            viewBox="0 0 1440 751" fill="none"  xmlns="http://www.w3.org/2000/svg">
                <path 
                d="M605.854 750.982C450.116 753.592 205.648 475.999 0 520.814V0H 1440V219.725C1386.24 203.191 1262.63 176.389 1198.31 201.451C1117.89 232.778 1067.52 392.46 1020.39 400.292C973.248 408.123 961.695 353.301 936.739 313.707C911.784 274.113 828.601 253.663 792.555 353.301C756.508 452.939 957.39 646.28 845.238 635.68C605.854 613.055 761.592 748.371 605.854 750.982Z" fill="url(#paint0_linear_1_10)"/>
                <defs>
                <linearGradient id="paint0_linear_1_10" x1="-1.76404e-05" y1="520" x2="1429.95" y2="-26.3001" gradientUnits="userSpaceOnUse">
                <stop stopColor="#01eeffd0"/>
                <stop offset="0.966936" stopColor="#0066ffa7"/>
                </linearGradient>
                </defs>
            </svg>

            <svg 
            className="w-2/3 h-2/3 absolute  top-[-3.5rem] 
            mix-blend-normal
            blur-[100px]
            opacity-4
            "
            viewBox="0 0 514 526" fill ="none"  xmlns="http://www.w3.org/2000/svg">
                <path d="M231.955 211.341C308.163 7.01157 594.218 16.3122 462.098 -176.205C494.326 -230.476 489.846 -309.932 214.098 -193.59C-130.587 -48.1613 49.0307 289.374 35.7133 355.8C22.3959 422.225 47.5896 450.801 103.898 426.981C160.206 403.162 208.275 423.216 269.095 486.8C329.914 550.383 450.789 551.837 507.648 366.091C564.506 180.345 155.747 415.67 231.955 211.341Z" fill="url(#paint0_linear_1_11)"/>
                    <defs>
                        <linearGradient id="paint0_linear_1_11" x1="576.223" y1="272.58" x2="37.6443" y2="-47.2533" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#fb7ffdd7"/>
                        <stop offset="1" stopColor="#e33131cf"/>
                        </linearGradient>
                    </defs>
            </svg> 
            <svg
                className=" absolute w-full bottom-[-50px] max-md:bottom-0 "
                viewBox="0 0 1440 604"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M760 435.452C544.368 463.007 234.943 374.829 0 498.829V604H1440V0.5C 1440 0.5 1296.64 13.2995 1171 90.5C1025.94 179.629 975.632 407.896 760 435.452Z"
                fill="white"
                />
            </svg>

      
    </div>
  );
};

export default Herowaves;
