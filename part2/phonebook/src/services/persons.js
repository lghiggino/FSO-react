import axios from "axios"
const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
    return  axios.get(baseUrl)
    // request.then(response => response.data)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
    // request.then(response => response.data)
}

// const updateImportance = (id, newObject) => {
//     return  axios.put(`${baseUrl}/${id}`, newObject)
//     // request.then(response => response.data)
// }

// const updateDate = (id, newObject) => {
//     return  axios.put(`${baseUrl}/${id}`, newObject)
//     // request.then(response => response.data)
// }

async function remove(id) {
    await axios.delete(`${baseUrl}/${id}`)
    return await axios.get(baseUrl)
}

export default { getAll, create, remove }