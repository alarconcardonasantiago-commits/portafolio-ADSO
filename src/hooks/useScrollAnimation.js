import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import anime from 'animejs';

export const useScrollAnimation = (animationConfig = {}, threshold = 0.2) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true, // Activate animation only once
  });

  useEffect(() => {
    if (inView) {
      anime({
        targets: animationConfig.targets,
        ...animationConfig,
      });
    }
  }, [inView, animationConfig]);

  return { ref, inView };
};
