import axios from 'axios';


const BOARD_API_BASE_URL = "http://localhost:8099/api/board";



class BoardService {
    getBoards(pageNo, keyword, type, categoryIdx) {
        let uri = '/list';
        let param = '';

        if (pageNo !== null) { param += "pageNo=" + pageNo };
        if (keyword !== null) { param += "&keyword=" + keyword };
        if (type !== null) { param += "&type=" + type };
        param += "&categoryIdx=" + categoryIdx;

        return axios.get(BOARD_API_BASE_URL + uri + "?" + param);
    }

    createBoard(board) {
        return axios.post(BOARD_API_BASE_URL + "/insert", board);
    }

    getOneBoard(idx) {
        return axios.get(BOARD_API_BASE_URL + "/read/" + idx);

    }

    updateBoard(idx, board) {
        return axios.put(BOARD_API_BASE_URL + "/" + idx, board);

    }

    deleteBoard(idx, board) {
        return axios.put(BOARD_API_BASE_URL + "/delete/" + idx, board);
    }
}


export default new BoardService();