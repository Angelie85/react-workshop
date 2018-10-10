import React from 'react'
import {Nav, NavItem} from 'react-bootstrap'

const Navigation = (props)=>{
  return(
    <div style={{display:'flex', margin:"20px"}}>
      <div>
        <img src="https://www.massmutual.com/global-images/logo/MM_FullMark_294.svg" width={245} alt="massmutual_logo"/>
      </div>
      <div style={{marginLeft:"30px"}}>
        <Nav bsStyle="pills">
          <NavItem eventKey={0} href="/">
            Hello World
          </NavItem>
          <NavItem eventKey={2} href="/news">
            News
          </NavItem>
          <NavItem eventKey={3} href="/youtube">
            YouTube Player
          </NavItem>
          <NavItem eventKey={1} href="/github">
            Github
          </NavItem>
        </Nav>
      </div>

    </div>
  )
}

export default Navigation