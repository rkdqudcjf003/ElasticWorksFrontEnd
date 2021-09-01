import axios from 'axios';


const ADMIN_API_BASE_URL = "http://localhost:8099/api/admin";



class AdminService {
    
    //all-user list 출력
    getMembers() {
        // console.log(axios.get(BOARD_API_BASE_URL + "/list?page_no=" + page_no +"&keyword=" + keyword));
        let uri = '/userList'; 
        // let param ='';
        return axios.get(ADMIN_API_BASE_URL + uri);

        // if(page_no !== null) {param +=  "page_no=" + page_no};
        // if(keyword !== null) {param +=  "&keyword=" + keyword};
        // if(type !== null) {param +=  "&type=" + type};

        // console.log(ADMIN_API_BASE_URL + uri + "?" + param);
        // return axios.get(ADMIN_API_BASE_URL + uri + "?" + param);
    }

    //all-board list 출력
    getBoards(page_no, keyword, type, category) {
        let uri = '/boardList';
        let param = '';

        if (page_no !== null) { param += "page_no=" + page_no };
        if (keyword !== null) { param += "&keyword=" + keyword };
        if (type !== null) { param += "&type=" + type };
        param += "&categoryIdx=" + category;

        return axios.get(ADMIN_API_BASE_URL + uri + "?" + param);
    }

    createBoard(board) {
        return axios.post(ADMIN_API_BASE_URL + "/insert", board);
    }

    getOneBoard(idx) {
        return axios.get(ADMIN_API_BASE_URL + "/read/" + idx);

    }

    updateBoard(idx, board) {
        return axios.put(ADMIN_API_BASE_URL + "/" + idx, board);

    }

    deleteBoard(idx, board) {
        return axios.put(ADMIN_API_BASE_URL + "/delete/" + idx, board);
    }
}


export default new AdminService();