const getCourses = async () => {
    return await fetch('https://learn-react-api.jobers.ro/wp-json/wp/v2/categories?acf_format=standard', {
        method: 'get'
    })
        .then(response => response.json())
        .catch(e => console.log(`Error ${e}`));
}

export default getCourses;