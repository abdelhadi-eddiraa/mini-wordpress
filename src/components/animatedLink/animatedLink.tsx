'use client';

import { useAnimate } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import useAnimatedRouter from '@/hooks/useAnimatedRouter';

type Props = {
  href: string;
  children: React.ReactNode;
  styleProps: string;
};

export default function AnimatedLink({ href, children, styleProps }: Props) {
  const { animatedRoute } = useAnimatedRouter();
  const [scope, animate] = useAnimate();

  function sequence() {
    animate([
      [scope.current, { scale: 1.5 }],

      [scope.current, { scale: 1 }],
    ]);
  }

  return (
    <Link
      ref={scope}
      className={styleProps}
      href={href}
      onClick={() => {
        sequence();
        animatedRoute(href);
      }}
      passHref
    >
      {children}
    </Link>
  );
}
