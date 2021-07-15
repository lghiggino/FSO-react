import axios from "axios"
const baseUrl = "http://localhost:3001/notes"

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const updateImportance = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const updateDate = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const remove = (id, removedObject) => {
    axios.delete(`${baseUrl}/${id}`, removedObject)
    return axios.get(baseUrl)
}

export default { getAll, create, updateImportance, updateDate, remove }