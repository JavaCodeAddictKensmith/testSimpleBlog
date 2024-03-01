import { Link, useParams } from 'react-router-dom'
import { useGetPostsByUserIdQuery } from '../posts/postsSlice'
import { useGetUsersQuery } from '../users/usersSlice'
import { useGetAlbumsQuery } from '../albums/AlbumSlice'
import { useEffect } from 'react'
import { Alert } from 'bootstrap'

const UserPage = () => {
    const { userId } = useParams()

    const { user,
        isLoading: isLoadingUser,
        isSuccess: isSuccessUser,
        isError: isErrorUser,
        error: errorUser
    } = useGetUsersQuery('getUsers', {
        selectFromResult: ({ data, isLoading, isSuccess, isError, error }) => ({
            user: data?.entities[userId],
            isLoading,
            isSuccess,
            isError,
            error
        }),
    })

    const {
        data: postsForUser,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostsByUserIdQuery(userId);

    const {
        data: alForUser,
        isLoading: albumLoading,
        isSuccess: isAlbumSuccess,
        isError: isAlbumError,
        error: albumError
    } = useGetAlbumsQuery(userId);


   

    let content;
    if (isLoading || isLoadingUser) {
        content = <p>Loading...</p>
    } else if (isSuccess && isSuccessUser) {
        const { ids, entities } = postsForUser
        // const {ids, entitie}= alForUser
        content = (
            <section>
               <h2> <span>Tweets titles By </span>{user?.name}</h2> <span style={{fontStyle:'italic'}}> Please click any of the tweets below to view Details</span>
               <div style={{   gap:35, paddingBottom: 200}}>
               <ol>
                    {ids.map(id => (
                        <li key={id}>
                            <Link to={`/post/${id}`}>{entities[id].title}</Link>
                        </li>
                    ))}
                </ol>


                <h2 style={{marginTop: 50}}> <span> Albums  By </span>{user?.name}</h2> 

                <ul>
                    {alForUser.ids&& alForUser.ids.map(el=>(
                        <li style={{color:'green', cursor:'pointer'}}>{alForUser.entities &&alForUser.entities[el].title}</li>

                    ))}

                    
                </ul>
               </div>
            </section>
        )
    } else if (isError || isErrorUser) {
        content = <p>{error || errorUser}</p>;
    }

    return content
}

export default UserPage