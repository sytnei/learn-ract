import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import getPosts from '../../services/getPosts';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react';
import { Breadcrumb } from 'react-bootstrap';

function Course() {
    const [posts, setposts] = useState([]);
    let { courseId } = useParams();

    useEffect(() => {
        getPosts().then(resoults => setposts(resoults));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Leasons</Breadcrumb.Item>
            </Breadcrumb>
            <h1>Leasons:</h1>

            <ListGroup>
                {!!posts.length && posts.map(post => (
                    <ListGroup.Item key={post.id}>
                        <Link to={`/leason/${courseId}/${post.id}`}>
                            <img
                                alt=""
                                src="/lesson.png"
                                width="20"
                                height="20" className='me-4' />
                            {post.title.rendered}</Link>
                    </ListGroup.Item>))}
            </ListGroup>
        </>

    );
}

export default Course;