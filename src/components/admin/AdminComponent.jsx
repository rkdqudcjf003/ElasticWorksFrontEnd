import React, { Component } from 'react'
import AdminService from 'src/service/AdminService'
class AdminComponent extends Component {

    //회원리스트 출력
    userList = (props) => {
      this.props.history.push('/admin/all-user')
    }

    //전체 게시판 리스트 출력
    allBoardList = (props) => {
        this.props.history.push('/admin/all-board')
    }

    //공지사항 리스트 출력
    noticeBoardList = (props) => {
        this.props.history.push('/admin/notice-board')
    }

    //FAQ 리스트 출력
    faqBoardList = (props) => {
        this.props.history.push('/admin/FAQ-board')
    }

    //QNA 리스트 출력
    qnaBoardList = (props) => {
        this.props.history.push('/admin/QNA-board')
    }

    //Popup 리스트 출력
    popupList = (props) => {
        AdminService.getPopup().then((res) => {
            console.log(res.data)
        })
    }
    
    render(){

        return(
            <div>
                <button onClick={() => {this.userList()}}>회원 관리</button>
                <button onClick={() => {this.allBoardList()}}>전체 게시판 관리</button>
                <button onClick={() => {this.noticeBoardList()}}>공지사항 관리</button>
                <button onClick={() => {this.faqBoardList()}}>FAQ 관리</button>
                <button onClick={() => {this.qnaBoardList()}}>QNA 관리</button>
                <button onClick={() => {this.popupList()}}>전체 팝업 관리</button>
            </div>
        )
    }
}

export default AdminComponent