import Image from "next/image";

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Column - Headings */}
        <div className="text-center space-y-4">
          <h2 className="text-lg sm:text-xl tracking-[.25em] mb-3 font-bold text-pink-500">
            SERVICES
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-md mx-auto">
            Our top value categories for you
          </h3>
        </div>

        {/* Right Column - Cards */}
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:flex lg:flex-nowrap">
          {/* Card 1 */}
          <div className="w-full lg:w-[280px] bg-white rounded-2xl p-6 shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
              <Image
                src="/images/service/4.png"
                alt="Destination"
                width={24}
                height={24}
              />
            </div>
            <h4 className="font-semibold text-lg">Best Tour Guide</h4>
            <p className="text-gray-600 text-sm">
              What looked like a small patch of purple grass, above five feet.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full lg:w-[280px] bg-white rounded-2xl p-6 shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
              <Image
                src="/images/service/5.png"
                alt="Destination"
                width={24}
                height={24}
              />
            </div>
            <h4 className="font-semibold text-lg">Easy Booking</h4>
            <p className="text-gray-600 text-sm">
              Square, was moving across the sand in their direction.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full lg:w-[280px] bg-white rounded-2xl p-6 shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center">
              <Image
                src="/images/service/6.png"
                alt="Destination"
                width={24}
                height={24}
              />
            </div>
            <h4 className="font-semibold text-lg">Weather Forecast</h4>
            <p className="text-gray-600 text-sm">
              What looked like a small patch of purple grass, above five feet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
