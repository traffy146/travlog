import Image from "next/image";

export default function Discount() {
  return (
    <div className="relative min-h-screen  overflow-hidden px-4 md:px-8 lg:px-12">
      {/* Decorative orbs */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-xl opacity-50" />
      <div className="absolute bottom-20 left-20 w-16 h-16 rounded-full bg-orange-400 blur-lg opacity-30" />
      <div className="absolute top-40 left-1/4 w-8 h-8 rounded-full bg-orange-300 blur-sm opacity-40" />

      <div className="max-w-7xl mx-auto pt-12 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side with image */}
          <div className="relative order-1 lg:order-1">
            <div className="relative z-10">
              <Image
                src="/images/cover/2.png"
                alt="Traveler with backpack"
                width={600}
                height={600}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right side content */}
          <div className="order-2 lg:order-2">
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <h2 className="text-lg sm:text-xl tracking-[.25em] mb-3 font-bold text-pink-500">
                  TRAVEL POINT
                </h2>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  We helping you find your dream location
                </h1>
                <p className="mt-4 text-gray-600 max-w-lg">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC.
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="space-y-2">
                  <h3 className="text-3xl lg:text-4xl font-bold text-orange-500">
                    500+
                  </h3>
                  <p className="text-gray-600">Holiday Package</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl lg:text-4xl font-bold text-orange-500">
                    100
                  </h3>
                  <p className="text-gray-600">Luxury Hotel</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl lg:text-4xl font-bold text-orange-500">
                    7
                  </h3>
                  <p className="text-gray-600">Premium Airlines</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl lg:text-4xl font-bold text-orange-500">
                    2k+
                  </h3>
                  <p className="text-gray-600">Happy Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
