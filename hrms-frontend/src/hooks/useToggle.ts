import { useState } from "react";

const useToggle: () => [boolean, () => void] = () => {
  const [state, setState] = useState<boolean>(false);

  function toggle(): void {
    setState((prev) => !prev);
  }
  return [state, toggle];
};

export default useToggle;
