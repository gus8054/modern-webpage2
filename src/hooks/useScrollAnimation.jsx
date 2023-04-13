import { useRef } from "react";

function useScrollAnimation(action) {
  const observer = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(action);
        } else {
          entry.target.classList.remove(action);
        }
      });
    })
  );
  const addTarget = (target) => observer.current.observe(target);
  const removeTarget = (target) => observer.current.unobserve(target);

  return { addTarget, removeTarget };
}

export default useScrollAnimation;
