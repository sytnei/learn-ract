import React from 'react';
import { useParams } from "react-router-dom";
import getPosts from '../../services/getPosts';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Steps() {
  const [posts, setposts] = useState([]);
  let { leasonId } = useParams();
  let { courseId } = useParams();

  useEffect(() => {
    getPosts().then(resoults => setposts(resoults));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div class="stepper-wrapper">

      {!!posts.length && posts.map((post, index) => (

        <div className={`stepper-item ${leasonId < post.id ? 'completed' : ''} ${parseInt(leasonId) === post.id ? 'active' : ''}`}>

          <Link to={leasonId < post.id ? `/leason/${courseId}/${post.id}` : '#'}><div className="step-counter">{index + 1}</div></Link>

          <div className="step-name">{post.title.rendered}</div>

        </div>
      ))}

    </div>
  )
}

export default Steps;