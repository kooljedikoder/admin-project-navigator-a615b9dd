
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
import { ArrowRight } from 'lucide-react';
import type { CarouselApi } from "@/components/ui/carousel";

const slides = [
  {
    id: 1,
    title: "Your Business, Our Expertise",
    subtitle: "INNOVATIVE SOLUTIONS FOR GROWTH",
    description: "We partner with businesses to create strategic solutions that drive real results",
    ctaText: "Learn More",
    ctaLink: "/pages/about-us",
    type: 'image' as const,
    source: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    title: "Digital Transformation",
    subtitle: "TECHNOLOGY FOR THE MODERN BUSINESS",
    description: "Leverage cutting-edge technology to transform your business operations",
    ctaText: "Our Services",
    ctaLink: "/pages/services",
    type: 'video' as const,
    source: "https://player.vimeo.com/external/517090621.hd.mp4?s=c8bbdfadbc7c654af239dbc5276c276a991274c2&profile_id=175",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    title: "Expert Consultation",
    subtitle: "TAILORED ADVICE FOR YOUR NEEDS",
    description: "Our team of experts provides personalized consultation to meet your unique requirements",
    ctaText: "Contact Us",
    ctaLink: "/pages/contact",
    type: 'image' as const,
    source: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop"
  }
];

export default function VideoHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  React.useEffect(() => {
    if (!carouselApi) return;

    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    });

    // Setup autoplay
    const autoplayInterval = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoplayInterval);
  }, [carouselApi]);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      <Carousel 
        className="h-full w-full"
        setApi={setCarouselApi}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="h-full">
              <div className="relative h-full w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-blue-900/30 z-10" />
                
                {slide.type === 'video' ? (
                  <video
                    src={slide.source}
                    autoPlay
                    muted
                    loop
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={slide.source}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                  />
                )}
                
                <div className="absolute bottom-[15%] left-0 p-12 text-white z-20 max-w-3xl">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-200 mb-2">
                    {slide.subtitle}
                  </h3>
                  <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                  <p className="mb-8 text-lg text-gray-200 max-w-2xl">
                    {slide.description}
                  </p>
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
                    asChild
                  >
                    <a href={slide.ctaLink}>
                      {slide.ctaText}
                      <ArrowRight size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform gap-4 z-30">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => carouselApi?.scrollTo(index)}
              className={cn(
                "h-16 w-24 overflow-hidden rounded border-2 transition-all",
                currentSlide === index
                  ? "border-blue-500 opacity-100"
                  : "border-transparent opacity-60 hover:opacity-100"
              )}
            >
              <img
                src={slide.thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
        
        <CarouselPrevious className="left-4 z-30 text-white border-white hover:bg-blue-800/50" />
        <CarouselNext className="right-4 z-30 text-white border-white hover:bg-blue-800/50" />
      </Carousel>
    </div>
  );
}
