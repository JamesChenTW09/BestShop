import React, { useState, useRef } from "react"
import { RootState } from "../../app/store"
import NavOrderSelect from "./NavOrderSelect"
import "../../Style/Header/NavTypeSelect.scss"

import { TYPELIST } from "../../CommonFunction/Const"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight , faArrowLeft, faUtensils, faMartiniGlass, faMugHot, faCow, faPizzaSlice, faBurger, faFish, faCheese, faBowlFood, faBreadSlice, faBacon} from '@fortawesome/free-solid-svg-icons'

import {  useDispatch, useSelector } from 'react-redux';
import {  setIfFetchMainPage  } from '../../features/handleBoolean/toggleFetchData';
import {  setSearchValue  } from '../../features/handleInput/searchText';


  interface typeSearchContainerCount{
    scrollWidth: number,
    clientWidth: number,
    scrollLeft: number
  }

const NavTypeSelect:React.FC = () => {
    const dispatch = useDispatch();
    const searchText = useSelector((state:RootState) => state.searchText.searchText);
    const screenWidth = useSelector((state:RootState) => state.screenSize.screenWidth);
    const smallScreen800 = screenWidth <= 800;


    const typeSearchContainer = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const handleScrollArrow = (position: string)=>{
        const typeContainerEle = typeSearchContainer.current;
        if(typeContainerEle){
            const typeContainerWidth = typeContainerEle.getBoundingClientRect().width;
            const typeContainerScrollLeft = typeContainerEle.scrollLeft;
            if (typeContainerEle) {
                typeContainerEle.scrollTo({
                  left : position === "left"? typeContainerScrollLeft - typeContainerWidth + 75 : typeContainerScrollLeft + typeContainerWidth - 75,
                  behavior: 'smooth',
                });          
            }
        }
    }

    const handleScrolltypes = ()=>{
        const {scrollWidth, clientWidth, scrollLeft} = typeSearchContainer.current as typeSearchContainerCount;
        const ifShowRightArrow = scrollWidth - (clientWidth + scrollLeft) >= 1;
        const ifShowLeftArrow = scrollLeft > 10;
        if(showLeftArrow !== ifShowLeftArrow) setShowLeftArrow(ifShowLeftArrow);
        if(showRightArrow !== ifShowRightArrow) setShowRightArrow(ifShowRightArrow);
    }

    const handleSelectType = (item: string)=>{
        if(searchText === item) dispatch(setSearchValue(""));
        else dispatch(setSearchValue(item));
        dispatch(setIfFetchMainPage(true)); 
    }

    const TYPEICONLIST = [faUtensils,faBurger,faMartiniGlass,faMugHot,faMugHot,faFish,faBowlFood,faUtensils,faPizzaSlice,faCow,faUtensils,faBacon,faCheese,faUtensils,faBreadSlice,faUtensils];
  return (
    <>
      <nav className="typeSearchAndOrderOutContainer flexCenter">
        <div className="typeSearchAndOrderInContainer">
        {showLeftArrow && !smallScreen800? 
            <div className="scrollLeftForTypesContainer flexCenter" onClick={()=>handleScrollArrow("left")}>
                <div className="scrollIconForTypes flexCenter">
                        <FontAwesomeIcon icon={faArrowLeft} className="navIcons"  />
                </div> 
            </div>:null
        }
            <div className='typeSearchContainer' ref={typeSearchContainer} onScroll={handleScrolltypes}>
                {
                    TYPELIST.map((type, index)=>{
                        const ifSelected = searchText === type;
                        const icon = TYPEICONLIST[index];
                        return (<div key={index}  style={ifSelected? {borderBottom:"3px solid gray"}:{}} className="typeItemContainer flexCenter" onClick={()=>handleSelectType(type)}>
                                    <FontAwesomeIcon icon={icon} className="navIcons"  />
                                    <div className="typeItemName">{type}</div>
                                </div>)
                    })
                }
            </div>
            <div className="scrollRightForTypesContainer">
                {showRightArrow && !smallScreen800? 
                    <div className="scrollIconForTypes flexCenter" onClick={()=>handleScrollArrow("right")}>
                        <FontAwesomeIcon icon={faArrowRight} className="navIcons"  />
                    </div>:null}
            </div>
            <NavOrderSelect />
        </div>
      </nav>
    </>
  )
}

export default NavTypeSelect;