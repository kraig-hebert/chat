import { useEffect } from 'react';

function useClickBlocking(blockingRef, inputRef, inputIsFocused) {
  useEffect(() => {
    function handleClick(event) {
      if (blockingRef.current && !blockingRef.current.contains(event.target)) {
        event.preventDefault();
        event.stopPropagation();
        inputRef.current.focus();
      }
    }
    if (inputIsFocused) document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [blockingRef, inputIsFocused]);
}

export default useClickBlocking;
