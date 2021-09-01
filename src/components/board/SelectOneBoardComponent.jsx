import React, { Component } from 'react';
import BoardService from 'src/service/BoardService';
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CTextarea,
    CInput,
    CLabel,
    CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

class SelectOneBoardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idx: this.props.match.params.idx,
            board: {}
        }

        this.goToUpdate = this.goToUpdate.bind(this);

    }

    componentDidMount() {
        BoardService.getOneBoard(this.state.idx)
            .then(res => {
                this.setState(
                    { board: res.data }
                );
                console.log("get result => " + JSON.stringify(res.data));
            });
    }

    goToList() {
        this.props.history.push('/all-board');
    }

    goToUpdate = (event) => {
        event.preventDefault();
        this.props.history.push(`/board/create-board/${this.state.idx}`);
    }

    deleteView = async function () {
        if (window.confirm("정말로 글을 삭제하시겠습니까?\n삭제된 글은 복구 할 수 없습니다.")) {
            BoardService.deleteBoard(this.state.idx, this.state.board)
                .then(res => {
                    console.log("delete result => " + JSON.stringify(res));
                    if (res.status == 200) {
                        this.props.history.push('/all-board');
                    } else {
                        alert("글 삭제가 실패했습니다.");
                    }
                });

        }
    }

    render() {
        return (
            <>
                <CCol xs="12" md="12">
                    <CCard>
                        <CCardHeader>
                            <large> 게시글</large>
                        </CCardHeader>
                        <CCardBody>
                            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel name="title">작성자</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="text" id="text-input" name="writer" value={this.state.board.writer} onChange={this.changeWriterHandler} />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">제목</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="text" id="text-input" name="title" value={this.state.board.title} onChange={this.changeTitleHandler} />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="textarea-input">내용</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CTextarea
                                            name="content"
                                            id="textarea-input"
                                            rows="9"
                                            value={this.state.board.content}
                                        />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="category">카테고리</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect custom name="category" id="category" disabled >
                                            <option value={this.state.board.category}>{this.state.board.category}</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                            </CForm>
                        </CCardBody>
                        <CCardFooter>
                            <CButton onClick={this.goToUpdate} color="outline-dark"> <midlle>게시글 수정</midlle></CButton>
                            <CButton onClick={() => this.deleteView()} color="outline-danger" style={{ marginLeft: "10px" }}><midlle>게시글 삭제</midlle></CButton>
                            <CButton onClick={this.goToList.bind(this)} type="submit" size="sm" color="outline-success" style={{ marginLeft: "10px" }} ><CIcon name="cil-file" /> <midlle>게시글 목록</midlle></CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </>
        );
    }
}


export default SelectOneBoardComponent;