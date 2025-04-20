import { HTMLAttributes } from 'react';

export interface ISocialLinkProps
  extends HTMLAttributes<HTMLAnchorElement> {
  icon: string;
  name: string;
}
