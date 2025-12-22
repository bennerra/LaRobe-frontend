import { useEffect, useState } from "react";

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const SCREEN_SM = 375;
  const SCREEN_MD = 576;
  const SCREEN_LG = 960;
  const SCREEN_XL = 1200;
  const SCREEN_XXL = 1400;

  useEffect(() => {
    const handleResize = (event: any) => {
      setWidth(event?.target?.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width <= SCREEN_SM,
    isScreenMd: width <= SCREEN_MD,
    isScreenLg: width <= SCREEN_LG,
    isScreenXl: width <= SCREEN_XL,
    isScreenXxl: width <= SCREEN_XXL,
  };
};
