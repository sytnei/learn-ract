import React from 'react'; 
import { useParams } from "react-router-dom";
import getPost from '../../services/getPost';
  
import { useState, useEffect } from 'react';

function Leason() {
    const [leason, setLeason] = useState([]); 
    let { courseId, leasonId } = useParams();
 
 
    useEffect(() => {
        !!leasonId && getPost(leasonId).then(post => setLeason(post));
    }, [leasonId]);
 
    return (
        <>
       
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