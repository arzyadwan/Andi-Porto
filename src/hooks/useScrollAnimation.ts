import { useEffect, useRef, RefObject } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Reusable hook for scroll-triggered animations.
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, `data-visible="true"` is set.
 * Pair with CSS [data-visible="true"] selectors to trigger animations.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLElement>(
  options: UseScrollAnimationOptions = {}
): RefObject<T | null> {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", once = true } =
    options;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.visible = "true";
          if (once) observer.unobserve(element);
        } else if (!once) {
          element.dataset.visible = "false";
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}
