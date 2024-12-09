import React, { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const callback = () => {
      setMatches(window.matchMedia(query).matches);
    };

    const matchMedia = window.matchMedia(query);
    matchMedia.addEventListener("change", callback);

    return () => {
      matchMedia.removeEventListener("change", callback);
    };
  }, [query]);

  const getSnapshot = () => matches;

  const getServerSnapshot = () => {
    throw Error("useMediaQuery is a client-only hook");
  };

  return { subscribe: useEffect, getSnapshot, getServerSnapshot };
}
