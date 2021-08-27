import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CInput,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
    CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import AuthenticationService from 'src/service/AuthenticationService';
import Cookies from 'js-cookie';





class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            userPwd: '',
            accessToken: '',
            refreshToken: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {
        AuthenticationService.executeJwtAuthenticationService(this.state.userId, this.state.userPwd)
            .then(() => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.userId, this.state.accessToken, this.state.refreshToken)
            })
            .catch(() => {
                    this.setState({ showSuccessMessage: false })
                    this.setState({ hasLoginFailed: true })
                })
    }




    render() {
        return (
            <div className="c-app c-default-layout flex-row align-items-center">
                <CContainer>
                    <CRow className="justify-content-center">
                        <CCol md="8">
                            <CCardGroup>
                                <CCard className="p-4">
                                    <CCardBody>
                                        <CForm >
                                            <h1>Login</h1>
                                            <p className="text-muted">Sign In to your account</p>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupPrepend>
                                                    <CInputGroupText>
                                                        <CIcon name="cil-user" />
                                                    </CInputGroupText>
                                                </CInputGroupPrepend>
                                                <CInput type="text" name="userId" placeholder="ID" value={this.state.userId} onChange={this.handleChange} />
                                            </CInputGroup>
                                            <CInputGroup className="mb-4">
                                                <CInputGroupPrepend>
                                                    <CInputGroupText>
                                                        <CIcon name="cil-lock-locked" />
                                                    </CInputGroupText>
                                                </CInputGroupPrepend>
                                                <CInput type="password" name="userPwd" placeholder="Password" value={this.state.userPwd} onChange={this.handleChange} />
                                            </CInputGroup>
                                            <CRow>
                                                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                                                {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                                                <CCol xs="6">
                                                    <CButton type="button" color="primary" className="px-4" onClick={() => this.loginClicked()}>로그인</CButton>
                                                </CCol>
                                                <CCol xs="6" className="text-right">
                                                    <CButton color="link" className="px-0">비밀번호를 잊어버리셨나요?</CButton>
                                                </CCol>
                                            </CRow>
                                        </CForm>
                                    </CCardBody>
                                </CCard>
                                <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                                    <CCardBody className="text-center">
                                        <div>
                                            <h2>환영합니다!</h2>
                                            <p>ㅡㅡㅡ</p>
                                            <Link to="/user/create-user">
                                                <CButton color="primary" className="mt-3" active tabIndex={-1}>회원가입 하기!</CButton>
                                            </Link>
                                        </div>
                                    </CCardBody>
                                </CCard>
                            </CCardGroup>
                        </CCol>
                    </CRow>
                </CContainer>
            </div>
        )
    }
}
export default LoginComponent
