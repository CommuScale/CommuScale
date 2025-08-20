import { useState, useEffect, useRef } from 'react';

interface LazyLoadProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  fallback?: React.ReactNode;
}

export default function LazyLoad({ 
  children, 
  threshold = 0.1, 
  rootMargin = '50px',
  fallback = <div className="h-20 bg-gray-800 animate-pulse rounded" />
}: LazyLoadProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsIntersecting(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin, hasLoaded]);

  return (
    <div ref={ref}>
      {isIntersecting ? children : fallback}
    </div>
  );
}

