import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import getPost from '../../services/getPost';
import { Breadcrumb } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function Leason() {
    const [leason, setLeason] = useState([]);
    let { courseId, leasonId } = useParams();


    useEffect(() => {
        !!leasonId && getPost(leasonId).then(post => setLeason(post));
    }, [leasonId]);

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item linkProps={{ to: `/` }} linkAs={Link}>Home</Breadcrumb.Item>
                <Breadcrumb.Item linkProps={{ to: `/course/${courseId}` }} linkAs={Link} >
                    Leasons
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{courseId}</Breadcrumb.Item>
            </Breadcrumb>
            {!!courseId && !!leasonId && !!leason?.content?.rendered && (
                <>
                    <h1 className='pb-4'>{leason.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{ __html: leason.content.rendered }} />

                </>
            )}

        </>

    );
}

export default Leason;