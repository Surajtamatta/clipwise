import React from "react";

const HalfCircle = ({ children }) => {
  return (
    <div className="relative h-auto w-full aspect-square flex justify-center items-center">
  
      <svg
        viewBox="0 0 707 707"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" h-auto w-full max-w-96  md:max-w-[707px] aspect-square absolute" // 100px greater than the inner div (570px)
      >
        <path
          id="svg_1"
          fill="#ffffff"
          className=""
          d="M 702.9999994224252 349.8076334485558 c -1 54.2937103363987 -12.036684475196125 105.89155673189424 -35.20270883462126 153.8323218684912 c -23.166024359425137 47.94171189025781 -56.85743441532168 89.97473418165544 -98.53592660791014 122.9331226315071 c -41.67849219258812 32.9583884498536 -90.25770274888242 55.98249073389377 -142.07716049971248 67.33880089866352 c -51.819457750830225 11.355363411109238 -105.5280389750676 10.746600807027448 -157.07896795286956 -1.7808436365090756 c -51.55092897780273 -12.528391197200222 -99.60061963781035 -36.64883422078026 -140.5281734721417 -70.54356204145233 c -40.92830759930847 -33.89567457433134 -73.66724138624393 -76.68231277995608 -95.7506707975671 -125.13621840086296 c -22.08342941132351 -48.45390562090728 -32.935459160543196 -101.31210927320325 -31.738555753691358 -154.59161830468503 c 2.196893984789593 -53.279509031480416 17.411571787979337 -105.59190919815887 38.64831929711986 -152.99532535933093 l 311.76313035344083 160.94332234417874 l 350.5007142679529 0 Z"
          opacity="0.2"
        />
      </svg>

      {/* Inner div with 570px max width */}
      <div className="w-full max-w-72 md:max-w-[570px] bg-white h-auto aspect-square flex justify-center items-center shadow-cirleshadow rounded-full relative z-10">
        <div className="w-full max-w-52 md:max-w-[364px] bg-white h-auto aspect-square flex justify-center items-center shadow-cirleshadow rounded-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HalfCircle;
