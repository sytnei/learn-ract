const getPost = async (postId) => {
    return await fetch(`https://learn-react-api.jobers.ro/wp-json/wp/v2/posts/${postId}`, {
        method: 'get'
    })
        .then(response => response.json())
        .catch(e => console.log(`Error ${e}`));
}

export default getPost;