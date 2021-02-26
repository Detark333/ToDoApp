import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/'
})

export const ToDoApi = {
    list() {
        return instance
            .get(`list`)
            .then(res => res.data)
    },
    add(task, complete) {
        return instance
            .post(`list`, {
                task, complete
            })
            .then(res => res.data)
    },
    delete(id) {
        return instance
            .delete(`list/${id}`, {
                id
            })
            .then(res => res.data)
    },
    update(id, task, complete) {
        return instance
            .patch(`list/${id}`, {
                task, complete
            })
            .then(res => res.data)
    }
}

