import { HTMLAttributes, ReactNode } from 'react';

export interface ITitleProps
  extends HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3;
  children: ReactNode;
}
