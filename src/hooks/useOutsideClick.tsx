import React, {useRef, useEffect} from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */

export function useOutsideClick(ref: any, cb: () => any) {
  useEffect(() => {
    (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    };
  }, [ref, cb]);
}
