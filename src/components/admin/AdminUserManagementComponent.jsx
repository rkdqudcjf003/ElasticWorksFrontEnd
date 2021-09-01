
import axios from 'axios';


const ADMIN_API_BASE_URL = "http://localhost:8222/api/admin";

class AdminUserManagementComponent {
     getMembers(page_no, keyword, type) {
         // console.log(axios.get(BOARD_API_BASE_URL + "/list?page_no=" + page_no +"&keyword=" + keyword));
         let uri = '/list'; 
         let param ='';

         if(page_no !== null) {param +=  "page_no=" + page_no};
         if(keyword !== null) {param +=  "&keyword=" + keyword};
        if(type !== null) {param +=  "&type=" + type};

        //  console.log(BOARD_API_BASE_URL + uri + "?" + param);
        //  return axios.get(BOARD_API_BASE_URL + uri + "?" + param);
     }
}

export default new AdminUserManagementComponent();

