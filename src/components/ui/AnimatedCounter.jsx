import { useEffect, useState, useRef } from 'react';

export default function AnimatedCounter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  // Extract numerical value for incrementing
  const numericEnd = parseInt(end.replace(/[^0-9]/g, ''), 10) || 0;
  const nonNumericParts = end.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const progressPercentage = Math.min(progress / duration, 1);
            
            // Eased animation progress
            const easeOutQuad = (t) => t * (2 - t);
            const currentCount = Math.floor(easeOutQuad(progressPercentage) * numericEnd);

            setCount(currentCount);

            if (progress < duration) {
              requestAnimationFrame(animate);
            } else {
              setCount(numericEnd);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [numericEnd, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}
      {nonNumericParts || suffix}
    </span>
  );
}
