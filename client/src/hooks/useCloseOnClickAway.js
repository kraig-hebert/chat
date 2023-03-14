import { useEffect, useRef } from 'react';

function useCloseOnClickAway(targetRef, isOpen, setIsOpen) {
  const firstRender = useRef(true);
  useEffect(() => {
    function handleClick(event) {
      if (
        !firstRender.current &&
        targetRef.current &&
        !targetRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        firstRender.current = true;
      } else firstRender.current = false;
    }
    if (isOpen) document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [targetRef, isOpen]);
}

export default useCloseOnClickAway;
