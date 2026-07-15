import { useState, useCallback, useRef, useEffect } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Reusable hook for scroll-triggered animations.
 * Returns a tuple containing:
 * 1. A callback ref function to attach to the element.
 * 2. A boolean indicating whether the element is visible.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLElement>(
  options: UseScrollAnimationOptions = {}
): readonly [(node: T | null) => void, boolean] {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", once = true } =
    options;
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const refCallback = useCallback(
    (node: T | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      if (node) {
        // If once is true and it's already visible, skip re-observing
        if (once && isVisible) {
          return;
        }

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              if (once) observer.unobserve(node);
            } else if (!once) {
              setIsVisible(false);
            }
          },
          { threshold, rootMargin }
        );

        observer.observe(node);
        observerRef.current = observer;
      }
    },
    [threshold, rootMargin, once, isVisible]
  );

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return [refCallback, isVisible] as const;
}
