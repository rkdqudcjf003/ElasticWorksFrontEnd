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




class CreateBoardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idx: this.props.match.params.idx,
            title: '',
            content: '',
            writer: localStorage.getItem('authenticatedUser') || '',
            category: ''
        }

        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeContentHandler = this.changeContentHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.createBoard = this.createBoard.bind(this);
    }

    changeTitleHandler = (event) => {
        this.setState({ title: event.target.value });
    }

    changeContentHandler = (event) => {
        this.setState({ content: event.target.value });
    }

    changeCategoryHandler = (event) => {
        this.setState({ category: event.target.value });
    }

    createBoard = async function () {
        let board = {
            title: this.state.title,
            content: this.state.content,
            writer: this.state.writer,
            category: this.state.category

        };
        if (this.state.idx === '_create') {
            if (window.confirm("작성하신 내용으로 게시글을 작성하시겠습니까?")) {
                BoardService.createBoard(board)
                    .then(res => {
                        console.log("CREATE RESULT => " + JSON.stringify(board));
                        this.props.history.push('/all-board');
                    });
            }
        } else {
            if (window.confirm("게시글을 수정하시겠습니까?\n수정하기 전 게시글은 복구 할 수 없습니다.")) {
                BoardService.updateBoard(this.state.idx, board)
                    .then(res => {
                        console.log("UPDATE RESULT => " + JSON.stringify(res));
                        if (res.status == 200) {
                            alert("게시글 수정이 성공했습니다.");
                            this.props.history.push('/all-board');
                        } else {
                            alert("게시글 수정이 실패했습니다.");
                        }
                    });

            }
        }
    }

    cancel() {
        this.props.history.push('/all-board');
    }

    getTitle() {
        if (this.state.idx === '_create') {
            return <h3 className="text-center"><large>새 게시글을 작성합니다.</large></h3>
        } else {
            return <h3 className="text-center"><large>{this.state.idx}번 게시글을 수정 합니다.</large></h3>
        }
    }

    componentDidMount() {
        if (this.state.idx === '_create') {
            return
        } else {
            BoardService.getOneBoard(this.state.idx)
                .then((res) => {
                    let board = res.data;
                    console.log("GET ONE BOARD => " + JSON.stringify(board));

                    this.setState({
                        title: board.title,
                        content: board.content,
                        writer: board.writer,
                        category: board.category
                    });
                });
        }
    }


    render() {
        return (
            <>

                <CCol xs="12" md="12">
                    <CCard>
                        <CCardHeader>

                            {
                                this.getTitle()
                            }
                        </CCardHeader>
                        <CCardBody>
                            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel name="title">작성자</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="text" id="text-input" name="writer" placeholder="작성자를 입력해주세요." value={this.state.writer} />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">제목</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="text" id="text-input" name="title" placeholder="제목을 입력해주세요." value={this.state.title} onChange={this.changeTitleHandler} />
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
                                            placeholder="내용을 작성해주세요."
                                            value={this.state.content} onChange={this.changeContentHandler}
                                        />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="category">카테고리</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect custom name="category" id="category" value={this.state.category} onChange={this.changeCategoryHandler}>
                                            <option value="0">카테고리를 선택해주세요.</option>
                                            <option value="1">공지사항</option>
                                            <option value="2">FAQ</option>
                                            <option value="3">QNA</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>

                            </CForm>
                        </CCardBody>
                        <CCardFooter>
                            <CButton onClick={() =>  this.createBoard()} type="submit" size="sm" color="outline-success"><CIcon name="cil-file" /> <midlle>글 작성</midlle></CButton>&nbsp;
                            <CButton onClick={this.cancel.bind(this)} type="reset" size="sm" color="outline-danger"><CIcon name="cil-x-circle" /> <midlle>취소</midlle></CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </> 

        );
    }
}

export default CreateBoardComponent