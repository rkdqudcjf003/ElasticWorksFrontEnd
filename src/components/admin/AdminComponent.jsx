import React, { Component } from 'react'
class AdminComponent extends Component {

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
                <button onClick={() => {this.userList()}}>회원 관리</button>
                <button onClick={() => {this.allBoardList()}}>전체 게시판 관리</button>
                <button onClick={() => {this.noticeBoardList()}}>공지사항 관리</button>
                <button onClick={() => {this.faqBoardList()}}>FAQ 관리</button>
                <button onClick={() => {this.qnaBoardList()}}>QNA 관리</button>
            </div>
        )
    }
}

export default AdminComponent