export interface Product {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  usermname: string;
  emial: string;
  website: string;
  quantity: number;
}

export interface ProductsState {
  products: {
    productsData: Product[];
    isLoading: boolean;
    cart: Product[];
    favourites: Product[];
    iconColor: {};
    admin: boolean;
    monsters: Product[];
    robots: Product[];
    avatars: Product[];
    roboHeads: Product[];
    order: Product[];
    totalOrders: Product[];
  };
}
