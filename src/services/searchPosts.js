const searchPosts = async (searchText) => {
    return await fetch(`https://learn-react-api.jobers.ro/wp-json/wp/v2/search/?search=${searchText}`, {
        method: 'get'
    })
        .then(response => response.json())
        .catch(e => console.log(`Error ${e}`));
}

export default searchPosts;