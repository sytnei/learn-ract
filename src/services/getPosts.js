const getPosts = async (courseId) => {
    return await fetch(`https://learn-react-api.jobers.ro/wp-json/wp/v2/posts/?categories=${courseId}`, {
        method: 'get'
    })
        .then(response => response.json())
        .catch(e => console.log(`Error ${e}`));
}

export default getPosts;