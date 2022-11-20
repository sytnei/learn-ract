const getNavigation = async () => {
    return await fetch(`http://learn-react-api.jobers.ro/wp-json/menus/v1/menus/6`, {
        method: 'get'
    })
        .then(response => response.json())
        .catch(e => console.log(`Error ${e}`));
}

export default getNavigation;