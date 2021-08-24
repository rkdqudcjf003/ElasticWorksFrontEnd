import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './scss/style.scss';

import MainLayout from 'src/components/common/MainLayout';
// import HeaderComponent from 'src/components/common/HeaderComponent';
// import FooterComponent from 'src/components/common/FooterComponent';
// import SideBarComponent from 'src/components/common/SideBarComponent';

// import LoginComponent from 'src/components/member/LoginComponent';

// import CreateBoardComponent from 'src/components/board/CreateBoardComponent';
// import ListBoardComponent from 'src/components/board/ListBoardComponent';
// import SelectOneBoardComponent from 'src/components/board/SelectOneBoardComponent';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// // Containers
// const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// // Pages
// const Login = React.lazy(() => import('./components/LoginComponent'));
// const Register = React.lazy(() => import('./views/pages/register/Register'));
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {

  render() {
    return (

      <Router>
        <React.Suspense fallback={loading}>
          <MainLayout />
        </React.Suspense>
      </Router>

    );
  }
}

export default App;
