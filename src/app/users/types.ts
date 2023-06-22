export interface User {
  id: number;
  name: string;
  emial: string;
  imageUrl: string;
  registered: string;
  city: string;
  country: string;
  login: any;
}

export interface UsersState {
  users: {
    usersData: User[];
    isLoading: boolean;
  };
}
