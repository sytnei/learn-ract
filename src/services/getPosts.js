const getPosts = async () => {
    return await fetch('http://learn-react-api.jobers.ro/wp-json/wp/v2/posts/', {
        method: 'get'
    })
        .then(response => response.json())
        .catch(e => console.log(`Error ${e}`));
}

export default getPosts;