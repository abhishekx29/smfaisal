import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import smfaisalLogo from "@/assets/smfaisal.png";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const startedAt = window.performance.now();
    let pageLoaded = document.readyState === "complete";
    let minimumTimeElapsed = false;

    const dismissWhenReady = () => {
      if (pageLoaded && minimumTimeElapsed) {
        document.body.classList.add("preloader-complete");
        setVisible(false);
      }
    };

    const handleLoad = () => {
      pageLoaded = true;
      dismissWhenReady();
    };

    window.addEventListener("load", handleLoad);

    const timer = window.setTimeout(() => {
      minimumTimeElapsed = true;
      dismissWhenReady();
    }, Math.max(3000 - (window.performance.now() - startedAt), 0));

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
      document.body.classList.remove("preloader-complete");
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          role="status"
          aria-label="Loading Dr. Syed Mohammad Faisal's website"
        >
          <div className="preloader__content">
            <motion.div
              className="preloader__mark"
              initial={{ opacity: 0, scale: 0.82, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <svg className="preloader__ring" viewBox="0 0 100 100" aria-hidden="true">
                <circle className="preloader__ring-track" cx="50" cy="50" r="46" />
                <motion.circle
                  className="preloader__ring-fill"
                  cx="50"
                  cy="50"
                  r="46"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 3, ease: "easeInOut" }}
                />
              </svg>
              <img src={smfaisalLogo} alt="" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}