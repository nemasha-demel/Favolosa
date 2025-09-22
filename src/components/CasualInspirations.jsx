function CasualInspirations() {
  return (
    <section className="px-4 lg:px-16 mt-8 md:mt-4">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Our Categories
        </h1>
        <p className="mt-2 md:mt-4 text-sm sm:text-base">
          Shop By Category and find the perfect outfit for any occasion.
        </p>
      </div>

      {/* Grid with 1 row and 5 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {/* Column 1 */}
        <div className="bg-gray-100 rounded-lg p-4 text-center flex flex-col items-center">
          <img
            src="/Images/ring.jpg"
            alt="Rings"
            className="w-full h-32 object-cover rounded-lg mb-2"
          />
          <span className="font-medium">Rings</span>
        </div>

        {/* Column 2 */}
        <div className="bg-gray-100 rounded-lg p-4 text-center flex flex-col items-center">
          <img
            src="/Images/bracelet.jpg"
            alt="Bracelets"
            className="w-full h-32 object-cover rounded-lg mb-2"
          />
          <span className="font-medium">Bracelets</span>
        </div>

        {/* Column 3 */}
        <div className="bg-gray-100 rounded-lg p-4 text-center flex flex-col items-center">
          <img
            src="/Images/earing.jpg"
            alt="Earrings"
            className="w-full h-32 object-cover rounded-lg mb-2"
          />
          <span className="font-medium">Earrings</span>
        </div>

        {/* Column 4 */}
        <div className="bg-gray-100 rounded-lg p-4 text-center flex flex-col items-center">
          <img
            src="/Images/chain.jpg"
            alt="Chains"
            className="w-full h-32 object-cover rounded-lg mb-2"
          />
          <span className="font-medium">Necklaces</span>
        </div>

        {/* Column 5 */}
        <div className="bg-gray-100 rounded-lg p-4 text-center flex flex-col items-center">
          <img
            src="/Images/others.jpg"
            alt="Others"
            className="w-full h-32 object-cover rounded-lg mb-2"
          />
          <span className="font-medium">Others</span>
        </div>
      </div>
    </section>
  );
}

export default CasualInspirations;
