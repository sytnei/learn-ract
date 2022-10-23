import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import getTodo from '../../services/getTodo';
import getPosts from '../../services/getPosts';

import { useState, useEffect } from 'react';

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getTodo().then(resoults => setCourses(resoults));
    }, []);

    let { courseId } = useParams();
    return (
        <>
            <h1>Courses</h1>
            <ul>
                {!!courses.length && courses.map(course => (
                    <li key={course.id}>
                        <Link to={`/courses/${course.id}`}>{course.title}</Link>
                    </li>))}
            </ul>
            {courseId}
        </>

    );
}

export default Courses;