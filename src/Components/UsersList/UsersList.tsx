import { FC } from "react"
import { IUsersListProps } from "./Users.types"
import UserItem from "./UserItem/UserItem"

const UsersList: FC<IUsersListProps> = ({users}) => {
    return(
        <div>
            {users.map(user => <UserItem key={user.id} user={user}/>)}
        </div>
    )
}

export default UsersList