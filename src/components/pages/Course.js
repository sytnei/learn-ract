import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import getPosts from '../../services/getPosts';
import { ListGroup, Breadcrumb } from 'react-bootstrap';
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
            <Breadcrumb>
                <Breadcrumb.Item linkProps={{ to: `/` }} linkAs={Link}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Leasons</Breadcrumb.Item>
            </Breadcrumb>
           
            <h1>Leasons:</h1>
            <ListGroup>
                {!!posts.length && posts.map(post => (

                    <ListGroup.Item key={post.id} className='d-table' >

                        <Link to={`/leason/${courseId}/${post.id}`}>
                            <img
                                alt=""
                                src="/book-icon.png"
                                width="18"
                                height="18"
                                className="d-inline-block align-left me-2"
                            />{post.title.rendered}
                        </Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>

    );
}

export default Course;