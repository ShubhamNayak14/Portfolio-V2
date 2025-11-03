// import { useRef, useEffect } from "react";
// export default function usePrevious(value: string | number) {
// 	const ref = useRef<string | number>();
// 	useEffect(() => {
// 		ref.current = value;
// 	}, [value]);
// 	return ref.current;
// }

import { useRef, useEffect } from "react";

export default function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined); //  provide initial value explicitly

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
