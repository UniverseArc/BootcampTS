
export interface IUser {
    id: number;
    name: string;
    email: string;
    address: IAddress;
}

export interface IAddress {
    street: string;
    city: string;
    zipcode: string;
}

export interface IUsersListProps {
    users: IUser[]
}

export interface IUserItemProps {
    user: IUser;
}
