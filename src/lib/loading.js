"use client";

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function useLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams({});

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading time for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => {
      clearTimeout(timer);
      setIsLoading(false);
    };
  }, [pathname, searchParams]);

  return isLoading;
}