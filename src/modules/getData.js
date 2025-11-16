const getData = () => {
    return fetch('https://test2-96f05-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json()
        })
}

export default getData