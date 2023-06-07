import React from "react";
import { useSpring, animated } from "@react-spring/web";

interface AnimatedHeadingProps {
  landingTexts: {
    [key: string]: {
      heading: string;
      description: string;
    };
  };
  language: string;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  landingTexts,
  language,
}) => {
  const headingAnimationProps = useSpring({
    from: {
      fontSize: "3.2rem",
      opacity: 0,
      transform: "scale(0.5)",
      transformOrigin: "center",
    },
    to: {
      fontSize: "3.2rem",
      opacity: 1,
      transform: "scale(1)",
      transformOrigin: "center",
    },
    config: {
      tension: 300,
      friction: 20,
    },
  });

  const descriptionAnimationProps = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
    config: {
      tension: 120,
      friction: 14,
      duration: 2000,
      delay: 300,
    },
  });

  return (
    <>
      <animated.h2 style={headingAnimationProps}>
        {landingTexts[language].heading}
      </animated.h2>
      <animated.p style={descriptionAnimationProps}>
        {landingTexts[language].description}
      </animated.p>
    </>
  );
};

export default AnimatedHeading;
