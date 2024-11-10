"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Building,
  PiggyBank,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const cities = [
  {
    name: "London",
    benefits: "Global financial hub, diverse culture",
    image: "https://utfs.io/f/K39jtZpI79HTkFZSQItwGbJSmq85WjZYLfspR93DrwzQBMhu",
  },
  {
    name: "Manchester",
    benefits: "Thriving tech scene, affordable prices",
    image: "https://utfs.io/f/K39jtZpI79HTAEB8xFcCinjXpwHJv5Uyr6SBzdsWPGEcumT3",
  },
  {
    name: "Birmingham",
    benefits: "Strong economy, major regeneration projects",
    image: "https://utfs.io/f/K39jtZpI79HTVzR27wm9n9Rhr0AlX2kTpMVjzcLJuY7mae4G",
  },
  {
    name: "Edinburgh",
    benefits: "Rich history, strong tourism sector",
    image: "https://utfs.io/f/K39jtZpI79HTAhZ6FC4cCinjXpwHJv5Uyr6SBzdsWPGEcumT",
  },
  {
    name: "Bristol",
    benefits: "Booming property market, high quality of life",
    image: "https://utfs.io/f/K39jtZpI79HTy4l8nJ2PKF3prBbih4zLT658q2DGeJuUwAtl",
  },
];

function CityCard({ city }:{city: {name: string, benefits: string, image: string}}) {
  return (
    <div className="relative w-[300px] h-[450px] mx-4">
      <Image
        src={city.image}
        alt={city.name}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-end p-6">
        <h3 className="text-white text-2xl font-bold mb-2">{city.name}</h3>
        <p className="text-white text-sm">{city.benefits}</p>
      </div>
    </div>
  );
}

function CitySlider() {
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

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {cities.map((city, index) => (
            <CityCard key={index} city={city} />
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous city</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next city</span>
      </Button>
    </div>
  );
}

export default function Cities() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
        <CitySlider />
    </div>
  );
}
