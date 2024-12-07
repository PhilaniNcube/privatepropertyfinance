import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-teal-700 via-accent to-accent min-h-[45vh] flex items-center justify-center relative">
      <Image
        src="https://utfs.io/f/K39jtZpI79HTa5DysXjGkOEQrPXfC93oxns05VjupRNiwHdq"
        width={1920}
        height={1280}
        alt="Banner"
        className="w-full max-h-[65vh] object-cover object-top"
      />
      <div className="absolute inset-0 flex items-center justify-center ">
        <h1 className="text-3xl font-semibold lg:text-5xl text-black text-center py-12">
          Get A Quote
        </h1>
      </div>
    </div>
  );
};
export default HeroSection;
