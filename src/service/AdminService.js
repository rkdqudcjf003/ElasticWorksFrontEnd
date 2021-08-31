import axios from 'axios';

//Admin RestApi BaseURL
const ADMIN_API_BASE_URL = "http://localhost:8099/";

class AdminService {

    //userList 출력
    userList = () => {
        axios({
            method : "get",
            url : ADMIN_API_BASE_URL+"api/admin/userList"
        }) 
    }


}

export default new AdminService();

