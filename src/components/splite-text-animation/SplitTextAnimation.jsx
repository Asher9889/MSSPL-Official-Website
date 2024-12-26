import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

/* eslint-disable */
 const SplitTextAnimation = ({ text, className = '', delay = 100 }) => {
  const words = text.split(' ');
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current); // Unobserve after triggering the animation
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const springs = useSprings(
    words.length,
    words.map((_, i) => ({
      from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
      to: inView
        ? async (next) => {
            await next({ opacity: 1, transform: 'translate3d(0,-10px,0)' });
            await next({ opacity: 1, transform: 'translate3d(0,0,0)' });
          }
        : { opacity: 0, transform: 'translate3d(0,40px,0)' },
      delay: i * delay,
    }))
  );

  return (
    <p
      className={`inline-block overflow-hidden ${className}`}
      ref={ref}
    >
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={props}
          className="inline-block transform will-change-transform will-change-opacity  text-blue-600"
        >
          {words[index]}
          {index < words.length - 1 && <span>&nbsp;</span>}
        </animated.span>
      ))}
    </p>
  );
};


export default SplitTextAnimation;
