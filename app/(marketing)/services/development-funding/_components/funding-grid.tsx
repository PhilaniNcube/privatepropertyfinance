"use client";


import useEmblaCarousel from "embla-carousel-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useCallback, useEffect } from "react";

const fundingTypes = [
  {
    title: "Residential Development Finance",
    image: "https://utfs.io/f/K39jtZpI79HTJp09B5raX7oTDzughHO1Rcj8FvUxQtpJPk3G",
  },
  {
    title: "Student Accommodation",
    image: "https://utfs.io/f/K39jtZpI79HTtoitlHqXzCiRBEdIquGgKwc53OnAm1lHx2pZ",
  },
  {
    title: "Land with or without Planning",
    image: "https://utfs.io/f/K39jtZpI79HT1T5BHZ0URJcrwzk3uHhneY642sfSm08Dj1qF",
  },
  {
    title: "Development Exit",
    image: "https://utfs.io/f/K39jtZpI79HTP4Or7ADEh0cZmVTUtWF4XL2gsw5Qxf3k8b1I",
  },
  {
    title: "Refurbishment",
    image: "https://utfs.io/f/K39jtZpI79HTka5i6GwGbJSmq85WjZYLfspR93DrwzQBMhuN",
  },
];

export default function FundingGrid() {

     const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
     const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
     const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

    const OPTIONS = {
      align: "start",
      containScroll: "trimSnaps",
      dragFree: true,
      slidesToScroll: 1,
    };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-accent text-center mb-8">
        Funding We can Source
      </h2>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {fundingTypes.map((funding, index) => (
              <div
                key={index}
                className="ml-4 flex-[0_0_calc(65%-16px)] sm:flex-[0_0_calc(45%-16px)] md:flex-[0_0_calc(35%-16px)] lg:flex-[0_0_calc(28.5%-16px)]" // Shows 3.5 items
              >
                <Card className="relative h-64 overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0">
                    <Image
                      src={funding.image}
                      alt={funding.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 28.5vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                  </div>
                  <div className="relative h-full flex items-end p-4 z-10">
                    <h3 className="text-xl font-semibold text-white">
                      {funding.title}
                    </h3>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={scrollPrev}
          variant="ghost"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          onClick={scrollNext}
          variant="ghost"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
