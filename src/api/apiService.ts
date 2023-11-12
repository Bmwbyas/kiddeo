class apiService {
    sendForm = async (data: any) => {
        return await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }
}

export default new apiService();
