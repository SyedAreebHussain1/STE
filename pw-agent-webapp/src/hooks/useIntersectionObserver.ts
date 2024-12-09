import React from "react";

export function useIntersectionObserver(options: IntersectionObserverInit) {
  const { threshold = 1, root = null, rootMargin = "0px" } = options;
  const [entry, setEntry] = React.useState<IntersectionObserverEntry | null>(
    null
  );

  const observerRef = React.useRef<IntersectionObserver | null>(null);

  const customRef = React.useCallback(
    (node: HTMLElement | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      if (node) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setEntry(entry);
          },
          { threshold, root, rootMargin }
        );

        observer.observe(node);
        observerRef.current = observer;
      }
    },
    [threshold, root, rootMargin]
  );

  return [customRef, entry] as const;
}
