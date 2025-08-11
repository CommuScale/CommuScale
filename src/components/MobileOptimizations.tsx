import { useEffect, useState } from 'react';

export const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return { isMobile, isTablet };
};

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

export const useViewportHeight = () => {
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      // Use visual viewport if available (mobile browsers)
      const height = window.visualViewport?.height || window.innerHeight;
      setViewportHeight(height);
      
      // Set CSS custom property for mobile viewport handling
      document.documentElement.style.setProperty('--vh', `${height * 0.01}px`);
    };

    updateHeight();
    
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateHeight);
      return () => window.visualViewport?.removeEventListener('resize', updateHeight);
    } else {
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }
  }, []);

  return viewportHeight;
};

// Touch-friendly button component
export const TouchButton = ({ 
  children, 
  className = '', 
  onClick, 
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}) => {
  return (
    <button
      className={`touch-manipulation select-none min-h-[44px] min-w-[44px] ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Performance monitoring hook
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
      });

      if ('PerformanceObserver' in window) {
        try {
          observer.observe({ type: 'layout-shift', buffered: true });
        } catch (e) {
          // Fallback for older browsers
        }
      }

      // First Input Delay (FID) and Largest Contentful Paint (LCP) can be monitored similarly
      // This is just a basic implementation
      
      return () => {
        observer.disconnect();
      };
    }
  }, []);
};
