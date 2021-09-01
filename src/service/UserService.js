import axios from 'axios';


const USER_API_BASE_URL = "http://localhost:8099/api/user";




class UserService {
    createUser(user) {
        return axios.post(USER_API_BASE_URL + "/signUp", user);
    }
    getOneUser(id) {
        return axios.get(USER_API_BASE_URL + "/read/" + id);
    }
    updateUser(id, user) {
        return axios.put(USER_API_BASE_URL + "/" + id, user);
    }
}

export default new UserService();