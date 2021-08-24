import React, { Component } from 'react';
import UserService from 'src/service/UserService';
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

class SelectOneUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.match.params.userId,
            user: {}
        }

    }

    componentDidMount() {
        UserService.getOneUser(this.state.userId).then(res => {
            this.setState({ user: res.data });
        });
    }

    goToList() {
        this.props.history.push('/user');
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
                                        <CLabel name="title">아이디</CLabel> 
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="text" id="text-input" name="userId"  value={this.state.board.userId} disabled/>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">패스워드</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="text" id="text-input" name="title" value={this.state.board.userPwd} onChange={this.changeTitleHandler} />
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
                            <CButton onClick={this.goToList.bind(this)} type="submit" size="sm" color="outline-success"><CIcon name="cil-file" /> <midlle>글 목록으로 이동</midlle></CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </>
        );
    }
}

export default SelectOneUserComponent;