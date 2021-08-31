import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
  CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
import routes from 'src/routes'

import {
  HeaderDropdownComponent,
  HeaderDropdownMssgComponent,
  HeaderDropdownNotifComponent,
  HeaderDropdownTasksComponent
} from 'src/components/common/index'
import AuthenticationService from 'src/service/AuthenticationService'
import { func } from 'prop-types'


const HeaderComponent = () => {
  const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
  // AuthenticationService.logout();


  // function UserGreeting(props) {
  //   return <h1>Welcome back!</h1>;
  // }

  // function GuestGreeting(props) {
  //   return <h1>Please sign up.</h1>;
  // }

  // function loginUserInfo(props) {
  //   return <CHeaderNavItem className="px-3" >
  //     <CHeaderNavLink to="/sign-in">로그인</CHeaderNavLink>
  //   </CHeaderNavItem>
  // }

  // function requireLogin() {
  //   return <CHeaderNavItem className="px-3">
  //     <CHeaderNavLink to="/logout">로그아웃</CHeaderNavLink>
  //   </CHeaderNavItem>
  // }

  const isLoggedIn = isUserLoggedIn;

  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({ type: 'set', sidebarShow: val })
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({ type: 'set', sidebarShow: val })
  }

  //조건부 렌더링(admin)
  const adminOrNot = () => {
    if (true) {
      return <CHeaderNavItem className="px-3">
             <CHeaderNavLink to="/admin" >관리</CHeaderNavLink>
             </CHeaderNavItem>
  }else{
    
  }
}
  
  return (
    
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo" />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/allBoard">게시판</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/user/create-user">회원가입</CHeaderNavLink>
        </CHeaderNavItem>
        {
          isLoggedIn
            ?
            <CHeaderNavItem className="px-3">
              <CHeaderNavLink to="/logout" >로그아웃</CHeaderNavLink>
            </CHeaderNavItem>
            :
            <CHeaderNavItem className="px-3" >
              <CHeaderNavLink to="/sign-in">로그인</CHeaderNavLink>
            </CHeaderNavItem>
        }
        {adminOrNot()}
        <CHeaderNavItem className="px-3">
              <CHeaderNavLink to="/logout" >로그아웃</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/users">Users</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink>Settings</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <HeaderDropdownNotifComponent />
        <HeaderDropdownTasksComponent />
        <HeaderDropdownMssgComponent />
        <HeaderDropdownComponent />
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        />
        <div className="d-md-down-none mfe-2 c-subheader-nav">
          <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="cil-speech" alt="Settings" />
          </CLink>
          <CLink
            className="c-subheader-nav-link"
            aria-current="page"
            to="/dashboard"
          >

            <CIcon name="cil-graph" alt="Dashboard" />&nbsp;Dashboard
          </CLink>
          <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="cil-settings" alt="Settings" />&nbsp;Settings
          </CLink>
        </div>
      </CSubheader>
    </CHeader>
  )
}

export default HeaderComponent;
