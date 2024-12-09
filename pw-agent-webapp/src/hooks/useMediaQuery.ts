import { useEffect, useState } from "react";

export function useMediaQuery(query: any) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const updateMatches = () => {
      setMatches(mediaQueryList.matches);
    };

    mediaQueryList.addListener(updateMatches);

    // Initial cleanup function
    return () => {
      mediaQueryList.removeListener(updateMatches);
    };
  }, [query]);

  const getSnapshot = () => matches;

  const getServerSnapshot = () => {
    throw new Error("useMediaQuery is a client-only hook");
  };

  return { subscribe: useEffect, getSnapshot, getServerSnapshot };
}
