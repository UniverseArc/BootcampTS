import { FC } from "react";
import { IUserItemProps } from "../Users.types";

const UserItem: FC<IUserItemProps> = ({user}) => {
    return (
        <div>
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
    )
}

export default UserItem;