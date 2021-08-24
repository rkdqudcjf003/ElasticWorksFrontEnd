import React from 'react'
import { withRouter } from 'react-router'
import {
  SideBarComponent,
  FooterComponent,
  HeaderComponent,
  ContentComponent
} from 'src/components/common/index'


const HeaderWithRouter = withRouter(HeaderComponent);


const MainLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <SideBarComponent />
      <div className="c-wrapper">
        <HeaderWithRouter />
        <div className="c-body">

          <ContentComponent />

        </div>
        <FooterComponent />
      </div>
    </div>
  )
}

export default MainLayout
