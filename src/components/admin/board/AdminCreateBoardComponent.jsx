import React, { Component } from 'react';
import AdminService from 'src/service/AdminService';
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




class AdminCreateBoardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idx: this.props.match.params.idx,
            title: '',
            content: '',
            writer: localStorage.getItem('authenticatedUser') || '',
            categoryIdx: ''
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
        this.setState({ categoryIdx: event.target.value });
    }

    createBoard = (event) => {
        event.preventDefault();
        let board = {
            title: this.state.title,
            content: this.state.content,
            writer: this.state.writer,
            categoryIdx: this.state.categoryIdx

        };
        console.log("board => " + JSON.stringify(board));
        if (this.state.idx === '_create') {
            AdminService.createBoard(board)
                .then(res => {
                    this.props.history.push('/admin/all-board');
                });
        } else {
            AdminService.updateBoard(this.state.idx, board)
                .then(res => {
                    this.props.history.push('/admin/all-board');
                });
        }
    }

    cancel() {
        this.props.history.goBack()
    }

    getTitle() {
        if (this.state.idx === '_create') {
            return <h3 className="text-center"><large>??? ???????????? ???????????????.</large></h3>
        } else {
            return <h3 className="text-center"><large>{this.state.idx}??? ???????????? ?????? ?????????.</large></h3>
        }
    }

    componentDidMount() {
        if (this.state.idx === '_create') {
            return
        } else {
            AdminService.getOneBoard(this.state.idx)
                .then((res) => {
                    let board = res.data;
                    console.log("board => " + JSON.stringify(board));

                    this.setState({
                        title: board.title,
                        content: board.content,
                        writer: board.writer,
                        categoryIdx: board.categoryIdx
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
                                        <CLabel name="title">?????????</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="text" id="text-input" name="writer" placeholder="???????????? ??????????????????." value={this.state.writer} />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">??????</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="text" id="text-input" name="title" placeholder="????????? ??????????????????." value={this.state.title} onChange={this.changeTitleHandler} />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="textarea-input">??????</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CTextarea
                                            name="content"
                                            id="textarea-input"
                                            rows="9"
                                            placeholder="????????? ??????????????????."
                                            value={this.state.content} onChange={this.changeContentHandler}
                                        />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="categoryIdx">????????????</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect custom name="categoryIdx" id="categoryIdx" value={this.state.categoryIdx} onChange={this.changeCategoryHandler}>
                                            <option value="0">??????????????? ??????????????????.</option>
                                            <option value="1">????????????</option>
                                            <option value="1">FAQ</option>
                                            <option value="2">QNA</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>

                            </CForm>
                        </CCardBody>
                        <CCardFooter>
                            <CButton onClick={this.createBoard} type="submit" size="sm" color="outline-success"><CIcon name="cil-file" /> <midlle>??? ??????</midlle></CButton>&nbsp;
                            <CButton onClick={this.cancel.bind(this)} type="reset" size="sm" color="outline-danger"><CIcon name="cil-x-circle" /> <midlle>??????</midlle></CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </>

        );
    }
}

export default AdminCreateBoardComponent