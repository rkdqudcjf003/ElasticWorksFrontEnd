import React from 'react';
import AdminComponent from './components/admin/AdminComponent';


const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const ListUserComponent = React.lazy(() => import('./components/admin/ListUserComponent'));

const AllBoardComponent = React.lazy(() => import('./components/board/AllBoardComponent'));
const NoticeBoardComponent = React.lazy(() => import('./components/board/NoticeBoardComponent'));
const FAQBoardComponent = React.lazy(() => import('./components/board/FAQBoardComponent'));
const QNABoardComponent = React.lazy(() => import('./components/board/QNABoardComponent'));
const CreateBoardComponent = React.lazy(() => import('./components/board/CreateBoardComponent'));
const SelectOneBoardComponent = React.lazy(() => import('./components/board/SelectOneBoardComponent'));

const CreateUserComponent = React.lazy(() => import('./components/user/CreateUserComponent'));
const SelectOneUserComponent = React.lazy(() => import('./components/user/SelectOneUserComponent'));

const LoginComponent = React.lazy(() => import('./components/user/LoginComponent'));
const LogoutSuccessComponent = React.lazy(() => import('./components/user/LogoutSuccessComponent'));

// const AuthenticatedRoute = React.lazy(() => import('src/components/user/AuthenticatedRoute'));



// const Test = React.lazy(() => import('./components/user/Test'));


const routes = [
  { path: '/', exact: true, name: '홈' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User},
  
  { path: '/all-board', exact: true, name: '전체글', component: AllBoardComponent },
  { path: '/notice-board', exact: true, name: '공지사항', component: NoticeBoardComponent },
  { path: '/FAQ-board', exact: true, name: 'FAQ', component: FAQBoardComponent },
  { path: '/QNA-board', exact: true, name: 'Q & A', component: QNABoardComponent },
  { path: '/board/create-board/:boardIdx',  name: '게시글 작성', component: CreateBoardComponent },
  { path: '/board/read-board/:boardIdx', name: '게시글 조회', component: SelectOneBoardComponent },

  { path: '/user/create-user', exact: true,  name: '회원가입', component: CreateUserComponent },
  { path: '/user/read-user/:id', exact: true, name: '회원정보', component: SelectOneUserComponent },

  // { AuthenticatedRoute}
  { path: '/sign-in', exact: true, name: '로그인', component: LoginComponent },
  { path: '/logout', exact: true, name: '로그아웃', component: LogoutSuccessComponent },
  // { path: '/checkLogin', exact: true, name: '로그인확인', component: AuthenticatedRoute },

  { path: '/admin', exact: true, name: '회원목록', component: AdminComponent },
  // { path: '/test', exact: true, name: '테스트', component: Test }

];

export default routes;
