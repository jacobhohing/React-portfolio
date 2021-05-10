import axios from 'axios';

const api = {
    getEmployees: employees => axios.get(`https://randomuser.me/api/?results=20`)
}

export default api;