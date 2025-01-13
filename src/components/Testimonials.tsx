import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient wave */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50" />
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,128L80,144C160,160,320,192,480,192C640,192,800,160,960,154.7C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            fill="url(#gradient)"
            fillOpacity="0.1"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF3366" />
              <stop offset="100%" stopColor="#9747FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 relative">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-xl tracking-[.25em] mb-3 font-bold text-pink">TESTIMONIALS</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Trust our clients</h3>
        </div>

        <div className="flex flex-col items-center text-center space-y-6">
          {/* Avatar */}
          <div className="relative w-24 h-24 rounded-full overflow-hidden bg-orange-400">
            <Image
              src="/images/profile/2.png"
              alt="Mark Smith"
              fill
              className="object-cover"
            />
          </div>

          {/* Name and Role */}
          <div className="space-y-1">
            <h4 className="text-orange-500 font-semibold text-lg">
              Mark Smith
            </h4>
            <p className="text-gray-600">Travel Enthusiast</p>
          </div>

          {/* Rating Stars */}
          <div className="flex gap-1">
            <Image
              src="/images/profile/3.png"
              alt="Rating Star"
              width={224}
              height={32}
            />
          </div>

          {/* Testimonial Content */}
          <p className="text-gray-600 max-w-2xl">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>

          {/* Static Dots */}
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-pink-500" />
            <div className="w-2 h-2 rounded-full bg-gray-300" />
            <div className="w-2 h-2 rounded-full bg-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
