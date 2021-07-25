import axios from "axios"
const baseUrl = "api/notes"
//"localhost:3001/api/notes"
//"https://peaceful-crag-14176.herokuapp.com/api/notes"
//"api/notes"


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const updateImportance = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}/importance`, newObject)
    return request.then(response => response.data)
}

const updateDate = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}/date`, newObject)
    return request.then(response => response.data)
}

const remove = (id, removedObject) => {
    axios.delete(`${baseUrl}/${id}`, removedObject)
    return axios.get(baseUrl)
}

export default { getAll, create, updateImportance, updateDate, remove }