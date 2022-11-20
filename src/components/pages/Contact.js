import React from 'react';
import { useState, useEffect } from 'react';
import getPage from '../../services/getPage';

const Contact = () => {
  const [page, setPage] = useState([]);

  useEffect(() => {
    getPage(39).then(page => setPage(page));
  }, []);

  return (
    <>
      <h1>Contact</h1>
      {!!page?.content && (<>
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      </>)}
    </>
  )


}

export default Contact;