import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const id = hash?.startsWith("#") ? hash.slice(1) : "";

    // If your Layout uses its own scroll container, mark it with data-scroll-container
    const scroller =
      document.querySelector<HTMLElement>("[data-scroll-container]") ?? null;

    const scrollWindowTop = () => window.scrollTo(0, 0);
    const scrollContainerTop = () => {
      if (scroller) scroller.scrollTo({ top: 0, behavior: "auto" });
      else scrollWindowTop();
    };

    const scrollToElement = (el: HTMLElement) => {
      if (!scroller) {
        el.scrollIntoView({ block: "start", behavior: "auto" });
        return;
      }

      // Scroll inside the container (not the window)
      const containerTop = scroller.getBoundingClientRect().top;
      const elTop = el.getBoundingClientRect().top;
      const delta = elTop - containerTop;

      scroller.scrollTo({
        top: scroller.scrollTop + delta,
        behavior: "auto",
      });
    };

    // No hash: go top
    if (!id) {
      scrollContainerTop();
      return;
    }

    // Hash: retry a few frames because routes are lazy-loaded
    let tries = 0;
    const maxTries = 45;

    const tick = () => {
      const el = document.getElementById(id);

      if (el) {
        scrollToElement(el);
        return;
      }

      tries += 1;
      if (tries < maxTries) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [pathname, hash, key]);

  return null;
}
