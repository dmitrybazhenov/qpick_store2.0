import { TProductPrice } from '../../../interfaces/product.interface';

export interface IPriceProps {
  price: TProductPrice;
  size?: 'small' | 'normal';
  color?: 'accent' | 'dark' | 'light';
}
