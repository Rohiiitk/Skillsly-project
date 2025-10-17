import React, { useCallback, useContext, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used within a <Carousel />");
  return context;
}

export function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  className = "",
  children,
  ...props
}) {
  // Create plugin ref for autoplay
  const autoplay = useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
      loop: true,
    },
    [autoplay.current] // Pass autoplay plugin here
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => api?.off("select", onSelect);
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        orientation,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        ref={carouselRef}
        className={`relative overflow-visible ${className}`}
        {...props}
      >
        {children}
        {/* Navigation Arrows */}
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ className = "", ...props }) {
  const { orientation } = useCarousel();
  return (
    <div
      className={`flex overflow-visible ${orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col"} ${className}`}
      {...props}
    />
  );
}

export function CarouselItem({ className = "", ...props }) {
  const { orientation } = useCarousel();
  return (
    <div
      className={`min-w-0 shrink-0 grow-0 overflow-visible basis-full ${orientation === "horizontal" ? "pl-4" : "pt-4"} ${className}`}
      {...props}
    />
  );
}

export function CarouselPrevious({ className = "", ...props }) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return (
    <button
      className={`absolute size-8 rounded-full bg-white text-black shadow hover:scale-105 transition-transform ${orientation === "horizontal"
        ? "top-1/2 -left-12 -translate-y-1/2"
        : "-top-12 left-1/2 -translate-x-1/2 rotate-90"} ${className}`}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
    </button>
  );
}

export function CarouselNext({ className = "", ...props }) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return (
    <button
      className={`absolute size-8 rounded-full bg-white text-black shadow hover:scale-105 transition-transform ${orientation === "horizontal"
        ? "top-1/2 -right-12 -translate-y-1/2"
        : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90"} ${className}`}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
    </button>
  );
}
