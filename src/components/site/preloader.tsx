import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import smfaisalLogo from "@/assets/smfaisal.png";

const PRELOADER_KEY = "smfaisal-preloader-seen";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const hasSeenPreloader = window.sessionStorage.getItem(PRELOADER_KEY);

    if (hasSeenPreloader) {
      setVisible(false);
      return;
    }

    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem(PRELOADER_KEY, "true");
      setVisible(false);
    }, 650);

    return () => window.clearTimeout(timer);
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
                  transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeInOut" }}
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