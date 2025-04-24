import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollAnimationProps {
  trigger: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  animation: gsap.TweenVars;
  target?: string;
}

export const useScrollAnimation = ({
  trigger,
  start = "top bottom",
  end = "bottom top",
  scrub = true,
  markers = false,
  animation,
  target,
}: UseScrollAnimationProps) => {
  useEffect(() => {
    const triggerElement = document.querySelector(trigger);
    const targetElement = target ? document.querySelector(target) : triggerElement;

    if (!triggerElement || !targetElement) return;

    const tween = gsap.to(targetElement, {
      ...animation,
      scrollTrigger: {
        trigger: triggerElement,
        start,
        end,
        scrub,
        markers,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [trigger, start, end, scrub, markers, animation, target]);
};

export default useScrollAnimation;