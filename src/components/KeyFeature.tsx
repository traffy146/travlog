import Image from "next/image";

export default function KeyFeature() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-8 lg:order-1 md:order-2 sm:order-2">
          <div className="text-center space-y-4">
            <h2 className="text-lg sm:text-xl tracking-[.25em] mb-3 font-bold text-pink-500">
              KEY FEATURES
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              We offer best services
            </h3>
            <p className="text-gray-600 max-w-lg">
              Contrary to popular belief, Lorem ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-orange-500 rounded-2xl">
                <Image
                  src="/images/service/1.png"
                  alt="Service 1"
                  width={100}
                  height={100}
                  className="w-6 h-6 text-white"
                />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">
                  We offer best services
                </h4>
                <p className="text-gray-600">
                  Lorem ipsum is not simply random text
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-4 bg-amber-400 rounded-2xl">
                <Image
                  src="/images/service/2.png"
                  alt="Service 2"
                  width={100}
                  height={100}
                  className="w-6 h-6 text-white"
                />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">
                  Schedule your trip
                </h4>
                <p className="text-gray-600">
                  It has roots in a piece of classical
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-4 bg-pink-500 rounded-2xl">
                <Image
                  src="/images/service/3.png"
                  alt="Service 2"
                  width={100}
                  height={100}
                  className="w-6 h-6 text-white"
                />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">
                  Get discounted coupons
                </h4>
                <p className="text-gray-600">
                  Lorem ipsum is not simply random text
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Images */}
        <div className="relative lg:order-2 md:order-1 sm:order-1 ">
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64">
            <div className="w-full h-full relative">
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                {[...Array(64)].map((_, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <div className="w-2 h-2 text-amber-400">×</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Images Container */}
          <div className="relative">
            <div className="">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/images/cover/3.png"
                  alt="Person in ocean waves"
                  width={693}
                  height={869}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
