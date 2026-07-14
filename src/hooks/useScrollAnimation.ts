import { useCallback, useRef } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Reusable hook for scroll-triggered animations.
 * Returns a callback ref to safely observe DOM mounting/unmounting.
 * When the element enters the viewport, `data-visible="true"` is set.
 * Pair with CSS [data-visible="true"] selectors to trigger animations.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLElement>(
  options: UseScrollAnimationOptions = {}
): (node: T | null) => void {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", once = true } =
    options;
  const observerRef = useRef<IntersectionObserver | null>(null);

  const refCallback = useCallback(
    (node: T | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      if (node) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              node.dataset.visible = "true";
              if (once) observer.unobserve(node);
            } else if (!once) {
              node.dataset.visible = "false";
            }
          },
          { threshold, rootMargin }
        );

        observer.observe(node);
        observerRef.current = observer;
      }
    },
    [threshold, rootMargin, once]
  );

  return refCallback;
}
