'use client';

import { useState, isValidElement, cloneElement } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useLenis, useTimeOut } from '../hooks';
import { Preloader } from './preloader';

export function Transition({ children }) {
  const [isLoading, setLoading] = useState(true);
  const [isPageReady, setPageReady] = useState(false);
  const pathname = usePathname();

  useLenis();

  useTimeOut({
    callback: () => {
      setLoading(false);
      setTimeout(() => {
        setPageReady(true);
        window.scrollTo(0, 0);
      }, 300);
    },
    duration: 2000,
    deps: [],
  });

  // Only inject `isLoaded` into React components (not HTML tags)
  const enhancedChildren = isPageReady
    ? Array.isArray(children)
      ? children.map((child, i) =>
          isValidElement(child) && typeof child.type !== 'string'
            ? cloneElement(child, { isLoaded: true, key: i })
            : child
        )
      : isValidElement(children) && typeof children.type !== 'string'
      ? cloneElement(children, { isLoaded: true })
      : children
    : children;

  return (
    <div key={pathname} className="overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>
      {enhancedChildren}
    </div>
  );
}
