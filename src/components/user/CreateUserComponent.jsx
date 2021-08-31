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
    CInput,
    CLabel,
    CSelect

} from '@coreui/react'
import CIcon from '@coreui/icons-react'

class CreateUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userNo: this.props.match.params.userNo,
            userId: '',
            userPwd: '',
            reCheckPwd: '',
            userRealName: '',
            userNickName: '',
            userPhoneNumber: '',
            userEmail1: '',
            userEmail2: '',
            userAddress1: '',
            userAddress2: '',
            userEmail2Selector: '',
            roleName: '',

            idWarningText: false,
            idChecking: false,

            pwdWarningText: false,
            pwdChecking: false,

            rePwdWarningText: false,
            rePwdChecking: false,

            nameWarningText: false,
            phoneNumberWarningText: false,


        }


        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.inputUserIdBlur = this.inputUserIdBlur.bind(this);

        this.changeUserPwdHandler = this.changeUserPwdHandler.bind(this);
        this.inputUserPwdBlur = this.inputUserPwdBlur.bind(this);

        this.reCheckPwdHandler = this.reCheckPwdHandler.bind(this);
        this.inputReCheckPwdBlur = this.inputReCheckPwdBlur.bind(this);

        this.changeUserRealNameHandler = this.changeUserRealNameHandler.bind(this);
        this.inputUserRealNameBlur = this.inputUserRealNameBlur.bind(this);

        this.changeUserNickNameHandler = this.changeUserNickNameHandler.bind(this);
        this.inputUserNickNameBlur = this.inputUserNickNameBlur.bind(this);

        this.changeUserPhoneNumberHandler = this.changeUserPhoneNumberHandler.bind(this);
        this.inputUserPhoneNumberBlur = this.inputUserPhoneNumberBlur.bind(this);

        this.changeUserEmail1Handler = this.changeUserEmail1Handler.bind(this);
        this.changeUserEmail2Handler = this.changeUserEmail2Handler.bind(this);
        this.changeEmail2Selector = this.changeEmail2Selector.bind(this);
        this.inputUserEmail2Blur = this.inputUserEmail2Blur.bind(this);


        this.changeUserAddress1Handler = this.changeUserAddress1Handler.bind(this);
        this.changeUserAddress2Handler = this.changeUserAddress2Handler.bind(this);

        this.changeUserRoleHandler = this.changeUserRoleHandler.bind(this);

        this.createUser = this.createUser.bind(this);
    }

    //=====================================아이디========================================
    changeUserIdHandler = (e) => {
        const idCurValue = e.target.value
        const idNewValue = idCurValue.replace(/[^a-zA-Z0-9]/gi, '')
        this.setState({ idChecking: false, idWarningText: false, userId: idNewValue })
    }

    inputUserIdBlur() {
        const idRegExp = /^[a-zA-Z0-9]{4,16}$/
        const idBlurCurValue = this.state.userId

        if (idBlurCurValue === '') {
            const idBlurNewValue = idBlurCurValue
            return this.setState({ idChecking: false, idWarningText: false, userId: idBlurNewValue })
        } else {
            if (!idRegExp.test(idBlurCurValue)) {
                const idBlurNewValue = idBlurCurValue
                return this.setState({ idChecking: false, idWarningText: true, userId: idBlurNewValue })
            } else {
                const idBlurNewValue = idBlurCurValue
                return this.setState({ idChecking: true, idWarningText: false, userId: idBlurNewValue })
            }
        }


    }

    //=====================================비밀번호========================================
    changeUserPwdHandler = (e) => {
        const pwdCurValue = e.target.value
        const pwdNewValue = pwdCurValue.replace(/[^a-zA-Z0-9~!@#$%^&*()+=]/g, '')

        this.setState({ pwdChecking: false, pwdWarningText: false, userPwd: pwdNewValue });
    }

    inputUserPwdBlur() {
        const pwdRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+=])[A-Za-z\d~!@#$%^&*()+=]{8,16}$/;
        const pwdBlurCurValue = this.state.userPwd
        if (pwdBlurCurValue === '') {
            const pwdBlurNewValue = pwdBlurCurValue;
            return this.setState({ pwdChecking: false, pwdWarningText: false, userPwd: pwdBlurNewValue });
        } else {
            if (pwdRegExp.test(pwdBlurCurValue)) {
                const pwdBlurNewValue = pwdBlurCurValue;
                return this.setState({ pwdChecking: true, pwdWarningText: false, userPwd: pwdBlurNewValue });

            } else {
                const pwdBlurNewValue = '';
                return this.setState({ pwdChecking: false, pwdWarningText: true, userPwd: pwdBlurNewValue });
            }
        }

    }

    //=====================================비밀번호 재확인 메소드========================================
    reCheckPwdHandler = (e) => {
        const rePwdCurValue = e.target.value;
        const rePwdNewValue = rePwdCurValue.replace(/[^a-zA-Z0-9~!@#$%^&*()+=]/g, '')

        this.setState({ rePwdChecking: false, pwdWarningText: false, reCheckPwd: rePwdNewValue });
    }

    inputReCheckPwdBlur() {
        const pwdRegExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/

        const rePwdBlurCurValue = this.state.reCheckPwd;
        const userPwdValue = this.state.userPwd;

        if (rePwdBlurCurValue === '') {
            const rePwdBlurNewValue = rePwdBlurCurValue;
            return this.setState({ rePwdChecking: false, rePwdWarningText: false, reCheckPwd: rePwdBlurNewValue });
        } else {
            if (pwdRegExp.test(rePwdBlurCurValue)) {
                if (rePwdBlurCurValue === userPwdValue) {
                    const rePwdBlurNewValue = rePwdBlurCurValue;
                    return this.setState({ rePwdChecking: true, rePwdWarningText: false, reCheckPwd: rePwdBlurNewValue });
                } else {
                    const rePwdBlurNewValue = '';
                    return this.setState({ rePwdChecking: false, rePwdWarningText: true, reCheckPwd: rePwdBlurNewValue });
                }

            } else {
                const rePwdBlurNewValue = '';
                return this.setState({ rePwdChecking: false, rePwdWarningText: true, reCheckPwd: rePwdBlurNewValue });
            }
        }
    }

    //=====================================이름========================================
    changeUserRealNameHandler = (e) => {
        const realNameCurValue = e.target.value;
        const realNameNewValue = realNameCurValue.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣]/gi, '');
        this.setState({ userRealName: realNameNewValue });
    }

    inputUserRealNameBlur() {
        const realNameRegExp = /^[ㄱ-ㅎㅏ-ㅣ가-힣]{2,4}$/;
        const realNameBlurCurValue = this.state.userRealName;

        if (realNameBlurCurValue === '') {
            const realNameBlurNewValue = realNameBlurCurValue;
            return this.setState({ realNameWarningText: false, userRealName: realNameBlurNewValue });
        } else {
            if (realNameRegExp.test(realNameBlurCurValue) === true) {
                const realNameBlurNewValue = realNameBlurCurValue;
                return this.setState({ realNameWarningText: false, userRealName: realNameBlurNewValue });

            } else {
                const realNameBlurNewValue = realNameBlurCurValue;
                return this.setState({ realNameWarningText: true, userRealName: realNameBlurNewValue });
            }
        }


    }

    //=====================================닉네임========================================
    changeUserNickNameHandler = (e) => {
        const nickNameCurValue = e.target.value;
        const nickNameNewValue = nickNameCurValue.replace(/[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]/gi, '');
        this.setState({ userNickName: nickNameNewValue });
    }

    inputUserNickNameBlur() {
        const nickNameRegExp = /^[a-zA-Z0-9가-힣]{2,12}$/;
        const nickNameBlurCurValue = this.state.userNickName;

        if (nickNameRegExp.test(nickNameBlurCurValue) === true) {
            const nickNameBlurNewValue = nickNameBlurCurValue;
            return this.setState({ nickNameWarningText: false, userNickName: nickNameBlurNewValue });

        } else {
            const nickNameBlurNewValue = nickNameBlurCurValue;
            return this.setState({ nickNameWarningText: true, userNickName: nickNameBlurNewValue });
        }
    }

    //=====================================휴대폰번호========================================
    changeUserPhoneNumberHandler(e) {
        if (e.target.value > 12) {
            e.target.value = e.target.value.slice(0, 11)
        }

        const phoneNumberCurValue = e.target.value
        const phoneNumberNewValue = phoneNumberCurValue.replace(/[^0-9]/g, '')

        this.setState({ phoneNumberWarningText: false, userPhoneNumber: phoneNumberNewValue })
    }

    inputUserPhoneNumberBlur() {
        const phoneNumberRegExp = /^010?([0-9]{8})$/
        const phoneNumberBlurCurValue = this.state.userPhoneNumber

        if (phoneNumberBlurCurValue === '') {
            const phoneNumberBlurNewValue = phoneNumberBlurCurValue
            return this.setState({ phoneNumberWarningText: false, userPhoneNumber: phoneNumberBlurNewValue })
        } else {
            if (phoneNumberRegExp.test(phoneNumberBlurCurValue)) {
                const phoneNumberBlurNewValue = phoneNumberBlurCurValue.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
                return this.setState({ phoneNumberWarningText: false, userPhoneNumber: phoneNumberBlurNewValue })

            } else {
                const phoneNumberBlurNewValue = phoneNumberBlurCurValue
                return this.setState({ phoneNumberWarningText: true, userPhoneNumber: phoneNumberBlurNewValue })
            }
        }

    }

    //=====================================이메일========================================
    changeUserEmail1Handler = (e) => {
        const email1CurValue = e.target.value
        const email1NewValue = email1CurValue.replace(/[^a-zA-Z0-9]/gi, '')
        this.setState({ userEmail1: email1NewValue });
    }

    changeUserEmail2Handler = (e) => {
        const email2CurValue = e.target.value
        const email2NewValue = email2CurValue.replace(/[^a-zA-Z0-9.]/gi, '')
        this.setState({ userEmail2Selector: 1, userEmail2: email2NewValue });
    }

    changeEmail2Selector = (e) => {
        const email2SelectCurValue = e.target.value

        if (email2SelectCurValue === 1) {
            const email2SelectNewValue = 1;
            this.setState({ userEmail2Selector: email2SelectNewValue, userEmail2: '' });
        } else {
            const email2SelectNewValue = email2SelectCurValue.replace(/[^a-zA-Z0-9.]/gi, '')
            this.setState({ userEmail2Selector: email2SelectNewValue, userEmail2: email2SelectNewValue });
        }
    }

    inputUserEmail2Blur() {
        const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
        const email2BlurCurValue = this.state.userEmail2;

        if (email2BlurCurValue === '') {
            const email2BlurNewValue = email2BlurCurValue
            return this.setState({ email2WarningText: false, userEmail2: email2BlurNewValue })
        } else {
            if (emailRegExp.test(email2BlurCurValue)) {
                const email2BlurNewValue = email2BlurCurValue
                return this.setState({ email2WarningText: false, userEmail2: email2BlurNewValue })

            } else {
                const email2BlurNewValue = email2BlurCurValue
                return this.setState({ email2WarningText: true, userEmail2: email2BlurNewValue })
            }
        }
    }


    //=====================================주소========================================
    changeUserAddress1Handler = (e) => {
        const address1CurValue = e.target.value
        const address1NewValue = address1CurValue.replace(/[^0-9ㄱ-ㅎㅏ-ㅣ가-힣-]/gi, '')
        this.setState({ userAddress1: address1NewValue });
    }
    changeUserAddress2Handler = (e) => {
        const address2CurValue = e.target.value
        const address2NewValue = address2CurValue.replace(/[^0-9ㄱ-ㅎㅏ-ㅣ가-힣-]/gi, '')
        this.setState({ userAddress2: address2NewValue });
    }

    //=====================================계정권한========================================
    changeUserRoleHandler = (e) => {
        this.setState({ roleName: e.target.value });
    }



    createUser = (e) => {
        e.preventDefault();
        let user = {
            userId: this.state.userId,
            userPwd: this.state.userPwd,
            userRealName: this.state.userRealName,
            userNickName: this.state.userNickName,
            userPhoneNumber: this.state.userPhoneNumber,
            userEmail1: this.state.userEmail1,
            userEmail2: this.state.userEmail2,
            userAddress1: this.state.userAddress1,
            userAddress2: this.state.userAddress2,
            roleName: this.state.roleName
        };

        UserService.createUser(user).then(res => {
            this.props.history.push('/login');
        });
    }

    cancel() {
        this.props.history.push('/');
    }





    render() {

        const { userRole } = this.state;
        const { changeUserRoleHandler } = this;



        return (
            <>

                <CCol xs="12" md="12">
                    <CCard>
                        <CCardHeader>
                            회원가입
                        </CCardHeader>
                        <CCardBody>
                            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel name="userId">아이디</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="4">
                                        <CInput type="text" id="userId" name="userId" placeholder="영문과 숫자로 4자 ~ 16자 입력하세요." value={this.state.userId} onChange={this.changeUserIdHandler} onFocus={() => this.changeUserIdHandler} onBlur={this.inputUserIdBlur} maxLength="16" />
                                        &nbsp;<small style={{ color: (this.state.idWarningText ? 'red' : (this.state.idChecking ? 'green' : 'black')) }}>{this.state.idWarningText ? '아이디는 최소 4자, 최대 16자의 영문과 숫자만 입력하세요.' : this.state.idChecking ? '사용할 수 있는 아이디 입니다.' : ''}</small>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="userPwd">비밀번호</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="4">
                                        <CInput type="text" id="userPwd" name="userPwd" placeholder="비밀번호를 입력하세요" value={this.state.userPwd} onChange={this.changeUserPwdHandler} onBlur={this.inputUserPwdBlur} maxLength="16"></CInput>
                                        &nbsp;<h1 style={{ color: (this.state.pwdWarningText ? 'red' : (this.state.pwdChecking ? 'green' : 'black')) }}>{this.state.pwdWarningText ? '영문 대문자/소문자, 숫자, "~!@#$%^&*()_+"가 1자리 이상 포함된 8자 ~ 16자 비밀번호를 입력하세요.' : this.state.pwdChecking ? '사용할 수 있는 비밀번호입니다.' : ''}</h1>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="reCheckPwd">비밀번호 확인</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="4">
                                        <CInput type="text" id="reCheckPwd" name="reCheckPwd" placeholder="비밀번호를 한번 더 입력하세요" value={this.state.reCheckPwd} onChange={this.reCheckPwdHandler} onBlur={this.inputReCheckPwdBlur} maxLength="15"></CInput>
                                        &nbsp;<small style={{ color: (this.state.rePwdWarningText ? 'red' : (this.state.rePwdChecking ? 'green' : 'black')) }}>{this.state.rePwdWarningText ? '입력하신 비밀번호와 일치하지 않습니다.' : this.state.rePwdChecking ? '비밀번호가 확인되었습니다.' : ''}</small>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="userRealName">이름</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="3">
                                        <CInput type="text" id="userRealName" name="userRealName" placeholder="한글 2자 ~ 4자" value={this.state.userRealName} onChange={this.changeUserRealNameHandler} onFocus={() => this.changeUserRealNameHandler} onBlur={this.inputUserRealNameBlur} maxLength="4" />
                                        &nbsp;<small style={{ color: (this.state.realNameWarningText ? 'red' : 'black') }}>{this.state.realNameWarningText ? '이름은 최소 2자 ~ 4자로 입력하세요.' : ''}</small>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="userNickName">닉네임</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="3">
                                        <CInput type="text" id="userNickName" name="userNickName" placeholder="문자, 숫자 2자 ~ 12자" value={this.state.userNickName} onChange={this.changeUserNickNameHandler} onFocus={() => this.changeUserNickNameHandler} onBlur={this.inputUserNickNameBlur} maxLength="12" />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="userPhoneNumber">휴대폰</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="3">
                                        <CInput style={{ color: (this.state.phoneNumberWarningText ? 'red' : 'black') }} type="text" id="userPhoneNumber" name="userPhoneNumber" placeholder='11자리 "ex) 01012345678"' value={this.state.userPhoneNumber} onChange={this.changeUserPhoneNumberHandler} onFocus={this.changeUserPhoneNumberHandler} onBlur={this.inputUserPhoneNumberBlur} />
                                        &nbsp;<small style={{ color: (this.state.phoneNumberWarningText ? 'red' : 'black') }}>{this.state.phoneNumberWarningText ? '올바른 휴대폰 번호를 입력하세요.' : ' '}</small>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="userEmail">이메일</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="3">
                                        <CInput type="text" id="userEmail" name="userEmail1" placeholder="이메일 주소를 입력하세요." value={this.state.userEmail1} onChange={this.changeUserEmail1Handler} onFocus={() => this.changeUserEmail1Handler} maxLength="20" />
                                    </CCol>
                                     @ 
                                    <CCol xs="12" md="4">
                                        <CInput type="text" id="userEmail" name="userEmail2" placeholder="도메인 주소를 선택하세요." value={this.state.userEmail2} onChange={this.changeUserEmail2Handler} onFocus={() => (this.state.userEmail2Selector === '1') ? this.changeUserEmail2Handler : false} onBlur={this.inputUserEmail2Blur} readOnly={(this.state.userEmail2Selector === '1') ? false : true} />
                                        <CSelect custom id="text-input" name="userEmail2" value={this.state.userEmail2Selector} defaultValue="" onChange={this.changeEmail2Selector}>
                                            <option value="">도메인 주소를 선택하세요.</option>
                                            <option value="naver.com">naver.com</option>
                                            <option value="gmail.com">gmail.com</option>
                                            <option value="daum.net">daum.net</option>
                                            <option value="1">직접입력</option>

                                        </CSelect>
                                        &nbsp;<small style={{ color: (this.state.email2WarningText ? 'red' : 'black') }}>{this.state.email2WarningText ? '도메인 주소를 확인하세요.' : ' '}</small>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="userAddress">주소</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="3">
                                        <CInput type="text" id="userAddress1" name="userAddress1" placeholder="주소를 입력하세요" value={this.state.userAddress1} onChange={this.changeUserAddress1Handler} />

                                        <CInput type="text" id="userAddress2" name="userAddress2" placeholder="상세주소를 입력하세요" value={this.state.userAddress2} onChange={this.changeUserAddress2Handler} />
                                    </CCol>
                                </CFormGroup>
                            </CForm>
                        </CCardBody>
                        <CCardFooter>
                            <CButton onClick={this.createUser} type="submit" size="sm" color="outline-success"><CIcon name="cil-file" /> <midlle>회원가입</midlle></CButton>&nbsp;
                            <CButton onClick={this.cancel.bind(this)} type="reset" size="sm" color="outline-danger"><CIcon name="cil-x-circle" /> <midlle>취소</midlle></CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </>

        );
    }
}
export default CreateUserComponent;