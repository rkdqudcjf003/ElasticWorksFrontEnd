import axios from 'axios';


const BOARD_API_BASE_URL = "http://localhost:8099/api/board";



class BoardService {
    getBoards(page_no, keyword, type, category) {
        let uri = '/list';
        let param = '';

        if (page_no !== null) { param += "page_no=" + page_no };
        if (keyword !== null) { param += "&keyword=" + keyword };
        if (type !== null) { param += "&type=" + type };
        param += "&category=" + category;

        return axios.get(BOARD_API_BASE_URL + uri + "?" + param);
    }

    createBoard(board) {
        return axios.post(BOARD_API_BASE_URL + "/insert", board);


    }

    getOneBoard(boardIdx) {
        return axios.get(BOARD_API_BASE_URL + "/read/" + boardIdx);

    }
    updateBoard(boardIdx, board) {
        return axios.put(BOARD_API_BASE_URL + "/" + boardIdx, board);

    }
}


export default new BoardService();