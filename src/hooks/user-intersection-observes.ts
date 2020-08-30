import { useRef, useEffect, useState } from 'react';

/* -------------------------------------------------------------------------- */

type ExtendedEntry = {
  isVisible: boolean;
} & IntersectionObserverEntry;

type Args = {
  onAppearOnly?: boolean;
} & IntersectionObserverInit;

type Return<T> = [(node: T) => void, ExtendedEntry?];

export const useIntersectionObserver = <T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  root = null,
  rootMargin = '0%',
  onAppearOnly = false,
}: Args): Return<T> => {
  const [entry, setEntry] = useState<ExtendedEntry>();
  const [node, setNode] = useState<T>();
  const observer = useRef<IntersectionObserver | null>(null);
  const noUpdate = entry?.isVisible && onAppearOnly;

  useEffect(() => {
    if (!window?.IntersectionObserver || noUpdate) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const isVisible = entries[0].intersectionRatio > 0;
        setEntry({ ...entries[0], isVisible });
      },
      {
        threshold,
        root,
        rootMargin,
      },
    );

    // Ensure the rest of useEffect use the same observer
    const { current: currentObserver } = observer;

    if (node) currentObserver.observe(node);

    return () => {
      currentObserver.disconnect();
    };
  }, [node, threshold, root, rootMargin, noUpdate]);

  return [setNode, entry];
};
