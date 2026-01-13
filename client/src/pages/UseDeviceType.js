import { useEffect, useState } from "react";

const useDeviceType = () => {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;

      if (width < 640) setDevice("mobile");       // <640px
      else if (width < 1024) setDevice("tablet"); // 640–1023px
      else setDevice("desktop");                  // ≥1024px
    };

    checkDevice(); // important on reload
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return device;
};

export default useDeviceType;
