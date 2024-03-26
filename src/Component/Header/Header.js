import { useRef } from "react";
import "../../Style/Header/Header.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

import {  useDispatch, useSelector } from 'react-redux';
import {  setSearchValue  } from '../../features/handleInput/searchText.js';
import {  setIfFetchMainPage  } from '../../features/handleBoolean/toggleFetchData.js';
import {  setIfshowAddEventBlock  } from '../../features/handleBoolean/toggleBlock.js';
import {  showDropDown, removeAllDropDown  } from '../../features/handleBoolean/toggleDropDown.js';


export default function Header() {
  const searchInputRef = useRef();
  const dispatch = useDispatch();
  const screenWidth = useSelector(state => state.screenSize.screenWidth);
  const ifShowLogInDropDown = useSelector(state => state.toggleDropDown.logInDropDown);
  const smallScreen600 = screenWidth <= 600;
  
  const handleSearch = ()=>{
    const searchValue = searchInputRef.current.value;
    dispatch(setSearchValue(searchValue));
    dispatch(setIfFetchMainPage(true));
  }

 const handleToggleDropDown = (event)=>{
  event.stopPropagation();
  dispatch(removeAllDropDown());
  dispatch(showDropDown({key:"logInDropDown", ifShow:!ifShowLogInDropDown}));
 }

  return (
    <header id="mainNavBar" className="flexCenter">
      <div className="navBarContainer flexBetween">
        <h2 id="mainLogo">{smallScreen600 ? "BS" : "BEST SHOP"}</h2>
        <div className="navSearchContainer">
          <input className="navSearchInput" ref={searchInputRef} type="text" onKeyDown={(e)=> e.key === "Enter" && handleSearch()} placeholder="搜尋"></input>
          <FontAwesomeIcon id="navSearchGlassIcon" icon={faMagnifyingGlass} className="navIcons" onClick={handleSearch} />
        </div>
        <div className="addEventLogInContainer">
        {smallScreen600? null:
          <div className="addNewEventButton" onClick={()=>dispatch(setIfshowAddEventBlock(true))}>
            新增行程
          </div>
        }
          <div className="logInContainer flexEven" onClick={handleToggleDropDown}>
            <div className="navBurgerLineContainer flexCenter">
              <div className="navBurgerLine"></div>
              <div className="navBurgerLine"></div>
              <div className="navBurgerLine"></div>
            </div>
            {smallScreen600? "":
              <div className="logInIconContainer flexCenter">
                  <FontAwesomeIcon icon={faUser} className="navIcons" />
              </div>              
            }
            {ifShowLogInDropDown && (
              <div className="logInDropDownContainer">
                <div className="userInfoButton">註冊</div>
                <div className="userInfoButton">登入</div>
                {smallScreen600? 
                <div onClick={()=>dispatch(setIfshowAddEventBlock(true))} className="userInfoButton">新增行程</div>:""
                }
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  )
}
