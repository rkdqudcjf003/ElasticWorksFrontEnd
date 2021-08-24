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
        // const cookies = new Cookies();
        super(props);
        const { cookies } = props;
        this.state = {
            boardIdx: this.props.match.params.boardIdx,
            title: '',
            content: '',
            writer: cookies.get('accessToken') || '',
            category: ''
        }

        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeContentHandler = this.changeContentHandler.bind(this);
        // this.changeWriterHandler = this.changeWriterHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.createBoard = this.createBoard.bind(this);
    }

    changeTitleHandler = (event) => {
        this.setState({ title: event.target.value });
    }
    changeContentHandler = (event) => {
        this.setState({ content: event.target.value });
    }
    // changeWriterHandler = (event) => {
    //     this.setState({ writer: event.target.value });
    // }
    changeCategoryHandler = (event) => {
        this.setState({ category: event.target.value });
    }

    createBoard = (event) => {
        event.preventDefault();
        let board = {
            title: this.state.title,
            content: this.state.content,
            writer: this.state.writer,
            category: this.state.category

        };
        console.log("board => " + JSON.stringify(board));
        if (this.state.boardIdx === '_create') {
            BoardService.createBoard(board).then(res => {
                this.props.history.push('/board');
            });
        } else {
            BoardService.updateBoard(this.state.boardIdx, board).then(res => {
                this.props.history.push('/board');
            });
        }
    }

    cancel() {
        this.props.history.push('/board');
    }

    getTitle() {
        if (this.state.boardIdx === '_create') {
            return <h3 className="text-center">새 글을 작성해주세요</h3>
        } else {
            return <h3 className="text-center">{this.state.boardIdx} 글을 수정 합니다.</h3>
        }
    }

    componentDidMount() {
        if (this.state.boardIdx === '_create') {
            return
        } else {
            BoardService.getOneBoard(this.state.boardIdx).then((res) => {
                let board = res.data;
                console.log("board => " + JSON.stringify(board));

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
                            <large> 게시글 작성</large>
                        </CCardHeader>
                        <CCardBody>
                            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel name="title">작성자</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="text" id="text-input" name="writer" placeholder="작성자를 입력해주세요." value={this.state.writer}  />
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
                                            <option value="자유게시판">자유게시판</option>
                                            <option value="질문과 답변">질문과 답변</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                
                            </CForm>
                        </CCardBody>
                        <CCardFooter>
                            <CButton onClick={this.createBoard} type="submit" size="sm" color="outline-success"><CIcon name="cil-file" /> <midlle>글 작성</midlle></CButton>&nbsp;
                             <CButton onClick={this.cancel.bind(this)} type="reset" size="sm" color="outline-danger"><CIcon name="cil-x-circle" /> <midlle>취소</midlle></CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </>

        );
    }
}

export default CreateBoardComponent