import axios from 'axios';


const USER_API_BASE_URL = "http://localhost:8222/api/user";




class UserService {
    createUser(user) {
        return axios.post(USER_API_BASE_URL + "/insert", user);
    }
    getOneUser(id) {
        return axios.get(USER_API_BASE_URL + "/read/" + id);
    }
    updateUser(id, user) {
        return axios.put(USER_API_BASE_URL + "/" + id, user);
    }
    // loginUser(id, pwd) {
    //     return axios.post(USER_API_BASE_URL + "/login", id, pwd);
    // }
}

export default new UserService();