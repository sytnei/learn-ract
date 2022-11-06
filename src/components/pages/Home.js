import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"; 
import Card from 'react-bootstrap/Card';
import getCourses from '../../services/getCourses';

import { useState, useEffect } from 'react';

function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(results => setCourses(results));
  }, []);
 
  return (
    <>
      <h1 className='pb-4'>Courses</h1>
      <div className='container'>
        {!!courses.length && courses.filter(course => course.slug !== 'uncategorized').map(course => (

          <Card style={{ width: '18rem' }} key={course.id}>
            <Card.Img variant="top" src={course.acf.image.sizes.medium} />
            <Card.Body>
              <Card.Title>{course.name}</Card.Title>
              <Card.Text>
                {course.description}
              </Card.Text>
              <Link to={`/course/${course.slug}`} className="btn btn-secondary btn-md">
                Read more
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>

  );
}

export default Home;