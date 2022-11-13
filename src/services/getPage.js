const getPage = async (pageID) =>  {
    return await fetch(`https://learn-react-api.jobers.ro/wp-json/wp/v2/pages/${pageID}`, {
        method: 'get'
    })
        .then(response => response.json())
        .catch(e => console.log(`Error ${e}`));      
}

export default getPage;