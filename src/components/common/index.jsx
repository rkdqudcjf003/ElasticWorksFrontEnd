// import TheContent from 'src/containers/TheContent'
// import TheFooter from 'src/containers/TheFooter'
// import TheHeader from 'src/containers/TheHeader'
// import TheHeaderDropdown from 'src/containers/TheHeaderDropdown'
// import TheHeaderDropdownMssg from 'src/containers/TheHeaderDropdownMssg'
// import TheHeaderDropdownNotif from 'src/containers/TheHeaderDropdownNotif'
// import TheHeaderDropdownTasks from 'src/containers/TheHeaderDropdownTasks'
// import TheLayout from 'src/containers/TheLayout'
// //================================================================
import SideBarComponent from 'src/components/common/SideBarComponent'
import HeaderComponent from 'src/components/common/HeaderComponent'
import FooterComponent from 'src/components/common/FooterComponent'
import MainLayout from 'src/components/common/MainLayout'


import CreateBoardComponent from 'src/components/board/CreateBoardComponent'
                                                                                                                                              import ListBoardComponent from 'src/components/board/ListBoardComponent'
import SelectOneBoardComponent from 'src/components/board/SelectOneBoardComponent'

import CreateUserComponent from 'src/components/user/CreateUserComponent'
import SelectOneUserComponent from 'src/components/user/SelectOneUserComponent'

import ListUserComponent from 'src/components/admin/ListUserComponent'

import HeaderDropdownComponent from 'src/components/common/HeaderDropdownComponent'
import HeaderDropdownMssgComponent from 'src/components/common/HeaderDropdownMssgComponent'
import HeaderDropdownNotifComponent from 'src/components/common/HeaderDropdownNotifComponent'
import HeaderDropdownTasksComponent from 'src/components/common/HeaderDropdownTasksComponent'
import ContentComponent from 'src/components/common/ContentComponent'

import LoginComponent from 'src/components/user/LoginComponent'
import LogoutSuccessComponent from '../user/LogoutSuccessComponent'
// import AuthenticatedRoute from '../user/AuthenticatedRoute'
// import Test from 'src/components/user/Test'


export {                                                
  // TheContent,                                                                                                                            
  // TheFooter,
  // TheHeader,     
  // TheHeaderDropdown,
  // TheHeaderDropdownMssg,
  // TheHeaderDropdownNotif,
  // TheHeaderDropdownTasks,
  // TheLayout,


  //================================================================
  MainLayout,
  HeaderComponent,
  SideBarComponent,
  FooterComponent,
  LoginComponent,
  LogoutSuccessComponent,
  // AuthenticatedRoute,

  HeaderDropdownComponent,
  HeaderDropdownMssgComponent,
  HeaderDropdownNotifComponent,
  HeaderDropdownTasksComponent,
  ContentComponent,
  //============================Board====================================
  CreateBoardComponent,
  ListBoardComponent,
  SelectOneBoardComponent,
  //============================User====================================
  CreateUserComponent,
  SelectOneUserComponent,
  //============================admin====================================
  ListUserComponent,

  //============================Test용 JSX====================================
  // Test
}
