import React, { Component } from 'react'
import AdminService from '../../service/AdminService'

class AdminComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }

    }
    
    render() {
        //회원리스트 출력
        const userList = () => {
           this.props.push("/dashboard")
        }

        //공지사항 리스트 출력
        const noticeBoardList = (props) => {

        }

        //FAQ 리스트 출력
        const faqBoardList = (props) => {

        }

        //QNA 리스트 출력
        const qnaBoardList = (props) => {

        }

        return (
            <div>
                <button onClick={() => userList()}>회원 관리</button>
                <button onClick={() => noticeBoardList()}>공지사항 관리</button>
                <button onClick={() => faqBoardList()}>FAQ 관리</button>
                <button onClick={() => qnaBoardList()}>QNA 관리</button>
            </div>
        )
    }
}

export default AdminComponent