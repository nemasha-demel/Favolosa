import React from "react";

function HeroGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-16 gap-4 mt-4">
      
      {/* Left Large Hero Image */}
      <div className="relative col-span-1 lg:col-span-2 rounded-2xl w-full max-w-full aspect-[779/506] mx-auto overflow-hidden">
        <img
          src="/Images/img3.jpg"
          alt="Hero"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white leading-tight">
            Elegance in  <br /> Every Piece 
          </h1>
        </div>
      </div>

      {/* Right Column - Two Smaller Images */}
      <div className="col-span-1 grid grid-rows-2 gap-4 w-full max-w-full mx-auto">
        
        {/* Top Image */}
        <div className="relative rounded-2xl overflow-hidden w-full aspect-[395/252]">
          <img
            src="/Images/img2.jpg"
            alt="Outdoor Active"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4">
            <h1 className="text-black text-2xl sm:text-3xl md:text-4xl leading-tight">
              A Touch <br /> Of Forver
            </h1>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="relative rounded-2xl overflow-hidden w-full aspect-[395/252]">
          <img
            src="/Images/img1.jpg"
            alt="Casual Comfort"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl leading-tight">
              Bold Simplicity, <br /> Lasting Beauty
            </h1>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroGrid;
