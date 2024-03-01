import { Link } from 'react-router-dom'
import { useGetUsersQuery } from './usersSlice'

const UsersList = () => {

    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery('getUsers')

    let content;
    if (isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {

        const renderedUsers = users.ids.map(userId => (
            <li key={userId}>
                <Link to={`/user/${userId}`}>{users.entities[userId].name}</Link>
            </li>
        ))

        content = (
            <section>
                <h2>List Of All Artists</h2>
                <span style={{fontStyle:'italic'}}> Please click any artist on the list below to view Tweets and Albums of each Artist</span>

                <ul>{renderedUsers}</ul>
            </section>
        )
    } else if (isError) {
        content = <p>{error}</p>;
    }

    return content
}

export default UsersList