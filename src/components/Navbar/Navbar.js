import React, { useState } from "react";
import logo from "./../../images/logo.svg";
import allLogo from "./../../images/all.svg";
import arrowLeft from './../../images/arrrowLeft.svg'
import './NavbarStyle.css'
import tag from './../../images/tag.svg'
import todo from './../../images/todo.svg'
import arrowRight from './../../images/arrowRight.svg'
import {useSelector} from 'react-redux'
import x from './../../images/x.svg'
function Navbar({clicked,  setClicked}) {
  const tags = useSelector(state => state.dapplets.tags);

  console.log(tags)
 
 
  const onClickedLogo = () => {
    setClicked(true)
  }
  const onDoubleClick = () => {
    setClicked(false)
  }
  
  return (
    <div className={`  ${clicked ? "slide" : "navbar__wrapp"} `}>
      <div className="navbar__container">
        <div className="navbar__logo ">
          <img src={logo} />
          <span>Dapplets Project</span>
          <div className="navbar__logowrapper">
            <img
              className="navbar__arrow"
              src={clicked ? arrowRight : arrowLeft}
              onClick={onClickedLogo}
              onDoubleClick={onDoubleClick}
            />
          </div>
        </div>
        <div className="navbar__allDapplets active">
          <img src={allLogo} />
          <span>hello</span>
        </div>
        <div className="navbar__allDapplets">
          <img src={allLogo} />
          <span>hello</span>
        </div>
        <div className="navbar__allDapplets">
          <img src={allLogo} />
          <span>hello</span>
        </div>
        <div className="navbar__allDapplets">
          <img src={allLogo} />
          <span>hello</span>
        </div>
        <div className="navbar__list">
          <span>My List</span>
          <ul>
            <li>TOP-10 Twitter Dapplets (Me)</li>
            <li>Best Financial dapplets by Jack (Jack)</li>
            <li>TOP-10 Twitter Dapplets (Me)</li>
          </ul>
        </div>
        <div className="navbar__tags">
          <span>My Tags</span>
          <ul>
          {tags.map((tag) => (
              <div className='navbar__tag' key={tag.id}>{tag.name}<img src={x} /></div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
