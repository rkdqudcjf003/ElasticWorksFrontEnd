import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'
// import AuthenticatedRoute from 'src/components/user/AuthenticatedRoute'
// import LogoutSuccessComponent from 'src/components/user/LogoutSuccessComponent'
// import WelcomeComponent from 'src/components/user/WelcomeComponent'
// import LoginComponent from 'src/components/user/LoginComponent'

// routes config
import routes from 'src/routes'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const ContentComponent = () => {
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
           
            {/* <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
            <AuthenticatedRoute path="/logout" component={LogoutSuccessComponent} /> */}
            {/* <AuthenticatedRoute path="/test" component={TestComponent}/> */}

            {routes.map((route, idx) => {
                return route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                      <CFade>
                        <route.component {...props} />
                      </CFade>
                    )} />
                )
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(ContentComponent)
