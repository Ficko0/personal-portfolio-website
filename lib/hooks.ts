import { useActiveSectionContext } from "@/context/active-section.context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { HeaderSections } from "./types";

export function useSectionInView(headerNames: HeaderSections, threshold = 0.75) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(headerNames);
    }
  }, [inView, setActiveSection, timeOfLastClick, headerNames]);

  return { ref };
}
