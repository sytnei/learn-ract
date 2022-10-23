import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import getPosts from '../../services/getPosts';

import getPost from '../../services/getPost';

import { useState, useEffect } from 'react';

function Posts() {
    const [posts, setposts] = useState([]);
    const [post, setpost] = useState({});
    let { postId } = useParams();

    useEffect(() => {
        !postId && getPosts().then(resoults => setposts(resoults));
    }, []);

    useEffect(() => {
        !!postId && getPost(postId).then(post => setpost(post));
    }, [postId]);


    return (
        <>
            {!postId && (
                <>
                    <h1>Posts:</h1>
                    <ul>
                        {!!posts.length && posts.map(post => (
                            <li key={post.id}>
                                <Link to={`/posts/${post.id}`}>{post.title.rendered}</Link>
                            </li>))}
                    </ul>
                </>)}

                {!!postId && (
                <>
                    <h1>{post.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </>)}

        </>

    );
}

export default Posts;