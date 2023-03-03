import http from './index';

export interface Item {
  id: number;
  name: string;
  description: string;
  like_count: number;
  comment_count: number;
  price: number;
  is_sold_out: boolean;
  shipping_fee: string;
  image: string;
  category_id: number;
}
export const getItems = (): Promise<Array<Item>> =>
  http({
    url: '/items',
  });

export const getItemDetail = (id: number | string): Promise<Item> =>
  http({
    url: `/items/${id}`,
  });

export interface Category {
  id: string;
  name: string;
}
export const getCategories = (): Promise<Array<Category>> =>
  http({
    url: '/categories',
  });
