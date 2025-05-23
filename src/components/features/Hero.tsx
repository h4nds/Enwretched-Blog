"use client";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Splash_video.mp4.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-purple-300 mb-4">
            EnWretched
          </h1>
          <p className="text-xl md:text-2xl text-purple-200">
            Digital Art & Creative Expression
          </p>
        </div>
      </div>
    </section>
  );
} 