import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from 'react-router-dom';
import { useGetPostsQuery } from './postsSlice';

const PostsExcerpt = ({ postId }) => {

    const { post } = useGetPostsQuery('getPosts', {
        selectFromResult: ({ data }) => ({
            post: data?.entities[postId]
        }),
    })

    return (
       post && <article>
       <h2>{post.title && post.title}</h2>
       <p className="excerpt">{post.body &&post.body.substring(0, 75)}...</p>
       <p className="postCredit">
           <Link to={`post/${post.id}`}>View Tweet</Link>
           <PostAuthor userId={post.userId} />
           <TimeAgo timestamp={post.date} />
       </p>
       <ReactionButtons post={post} />
   </article>
    )
}

export default PostsExcerpt