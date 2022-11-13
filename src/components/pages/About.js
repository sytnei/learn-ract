import React from 'react';
import { useState, useEffect } from 'react';
import getPage from '../../services/getPage';

const About = () => {
  const [page, setPage] = useState([]);

  useEffect(() => {
    getPage(2).then(page => setPage(page));
  }, []);

  return (
    <>

      <h1>About Us</h1>
      {!!page?.content && (<> 
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      </>)}

    </>
  );
}

export default About;