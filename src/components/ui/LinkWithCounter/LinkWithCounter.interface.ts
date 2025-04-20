import { LinkProps } from 'react-router-dom';

export interface ILinkWithCounterProps
  extends LinkProps {
  icon: string;
  counter?: number;
}
