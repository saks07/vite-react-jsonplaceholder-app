import { useContext, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { selectUsers, setUsers } from "./usersSlice"
import { User } from "../../interfaces/user.interface";
import { MainAppContext } from "../../context/MainAppContext";

function UsersComponent() {
    const usersData = useAppSelector(selectUsers);
    const dispatch = useAppDispatch();
    const [stateUsersData, setStateUsersData] = useState<User[]>([]);
    const mainAppContext = useContext(MainAppContext);

    const getUserData = async (): Promise<void> => {
        const result = await mainAppContext.userService.getUsers();
        setStateUsersData(result.data);
        dispatch(setUsers(result.data));
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div className="users-container" >
            <h1>Users</h1>
            {stateUsersData.length
                ?
                <ul>
                    {stateUsersData.map(user => (
                        <li key={user.id}>{user.username}</li>
                    ))}
                </ul>
                :
                <p>No users found</p>
            }
        </div>
    );
}

export default UsersComponent;
