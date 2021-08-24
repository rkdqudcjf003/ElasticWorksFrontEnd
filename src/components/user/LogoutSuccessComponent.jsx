import React, { Component } from 'react'
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

import AuthenticationService from 'src/service/AuthenticationService'

class LogoutSuccessComponent extends Component {

    doLogout() {
        AuthenticationService.logout();
    }

    render() {
        const { doLogout } = this;


        return (
            <>
                <CCardFooter>
                    <CButton onClick={doLogout} size="sm" color="outline-warning"><CIcon name="cil-file" /> <midlle>로그아웃</midlle></CButton>&nbsp;

                </CCardFooter>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank You for Using Our Application.
                </div>
            </>
        )
    }
}

export default LogoutSuccessComponent