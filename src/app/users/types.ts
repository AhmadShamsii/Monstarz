export interface User {
  id: number;
  name: string;
  first_name: string;
  usermname: string;
  emial: string;
  website: string;
  quantity: number;
}

export interface UsersState {
  users: {
    usersData: User[];
    isLoading: boolean;
    cart: User[];
    favourites: User[];
    iconColor: {};
    admin: boolean;
  };
}
