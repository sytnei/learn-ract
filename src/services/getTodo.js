

const getTodo = async () => {
    return await fetch('https://gorest.co.in/public/v2/users/21/todos', {
        method: 'get'
    })
        .then(response => response.json())
        .catch(e => console.log(`Error ${e}`));
}

export default getTodo;