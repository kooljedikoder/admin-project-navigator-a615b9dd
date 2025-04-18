
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Transforming Businesses Together",
    subtitle: "INNOVATIVE SOLUTIONS FOR GROWTH",
    description: "Comprehensive solutions designed to elevate your business success",
    image: "/lovable-uploads/bb0b06d1-cfdb-4764-8095-a9cd2003ab75.png",
  },
  {
    id: 2,
    title: "Digital Innovation",
    subtitle: "TRANSFORM YOUR DIGITAL PRESENCE",
    description: "Cutting-edge solutions for modern business challenges",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    id: 3,
    title: "Creative Excellence",
    subtitle: "DESIGNING THE FUTURE",
    description: "Innovative design solutions that make your brand stand out",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <Carousel
        className="h-full w-full"
        // Fix: Remove the problematic props
        // current={currentSlide}
        // onSelect={setCurrentSlide}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="h-full">
              <div className="relative h-full w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-[20%] left-0 p-8 text-white">
                  <h1 className="mb-2 text-5xl font-bold">{slide.title}</h1>
                  <p className="mb-4 text-lg font-medium tracking-wider text-blue-200">
                    {slide.subtitle}
                  </p>
                  <p className="mb-8 max-w-2xl text-lg text-gray-200">
                    {slide.description}
                  </p>
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Let's Get Started
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform gap-4">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "h-16 w-24 overflow-hidden rounded-md border-2 transition-all",
                currentSlide === index
                  ? "border-blue-500 opacity-100"
                  : "border-transparent opacity-60 hover:opacity-100"
              )}
            >
              <img
                src={slide.image}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
}
