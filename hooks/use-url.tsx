import { useEffect, useState } from "react";

export const useUrl = () => {
  const [mounted, setMounted] = useState(false);
  const url =
    typeof window !== "undefined" && window.location.href
      ? window.location.href
      : "";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return "";
  }

  return url;
};
