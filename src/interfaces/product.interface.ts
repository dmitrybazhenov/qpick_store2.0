export interface Iproduct {
  id: number;
  img: string;
  name: string;
  tags: string[];
  rating: number;
  price: TProductPrice;
}

export type TProductPrice = {
  actual: number;
  old?: number;
};
