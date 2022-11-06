import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import getPosts from '../../services/getPosts';

import { useState, useEffect } from 'react';

function Course() {
    const [posts, setposts] = useState([]);
    let { courseId } = useParams();

    useEffect(() => {
        getPosts().then(resoults => setposts(resoults));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
 
    return (
        <>
            <h1>Leasons:</h1>
            <ul>
                {!!posts.length && posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/leason/${courseId}/${post.id}`}>{post.title.rendered}</Link>
                    </li>))}
            </ul>
        </>

    );
}

export default Course;