import { useEffect, useState } from "react";

export function useMouseOver(node: HTMLElement | null, delay = 500) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    if (node) {
      const handleMouseOver = () => {
        setIsHovered(true);
      };
      const handleMouseOut = () => {
        timer = setTimeout(() => setIsHovered(false), delay);
      };
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
      return () => {
        if (timer) {
          clearTimeout(timer);
        }
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [node, delay]);

  return isHovered;
}
