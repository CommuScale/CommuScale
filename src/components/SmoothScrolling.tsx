import { useEffect } from 'react';

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Use CSS scroll-behavior instead of heavy JavaScript library
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return <>{children}</>;
}
