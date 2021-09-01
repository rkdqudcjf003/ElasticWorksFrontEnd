import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from 'src/components/common/_nav'

const SideBarComponent = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  //SideBard조건부 렌더링(admin)
  // const adminOrNot = () => {
  //   if (true) {
  //     return  <CCreateElement
  //               items={navigation}
  //               components={{
  //                 CSidebarNavDivider,
  //                 CSidebarNavDropdown,
  //                 CSidebarNavItem,
  //                 CSidebarNavTitle
  //               }}
  //             />
  //   }
  // }
  
  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>
      {/* {adminOrNot()} */}
        {/* <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        /> */}
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(SideBarComponent)


