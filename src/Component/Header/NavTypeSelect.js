import { useState, useRef } from "react"
import NavOrderSelect from "./NavOrderSelect.js"
import "../../Style/Header/NavTypeSelect.scss"

import { TYPELIST } from "../../CommonFunction/Const.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity, faArrowRight , faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import {  useDispatch, useSelector } from 'react-redux';
import {  setIfFetchMainPage  } from '../../features/handleBoolean/toggleFetchData.js';
import {  setSearchValue  } from '../../features/handleInput/searchText.js';

export default function NavTypeSelect() {
    const dispatch = useDispatch();
    const searchText = useSelector(state => state.searchText.searchTex);
    const screenWidth = useSelector(state => state.screenSize.screenWidth);
    const smallScreen800 = screenWidth <= 800;


    const typeSearchContainer = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const handleScrollArrow = (position)=>{
        const typeContainerEle = typeSearchContainer.current;
        const typeContainerWidth = typeContainerEle.getBoundingClientRect().width;
        const typeContainerScrollLeft = typeContainerEle.scrollLeft;
        if (typeContainerEle) {
            typeContainerEle.scrollTo({
              left : position === "left"? typeContainerScrollLeft - typeContainerWidth + 75 : typeContainerScrollLeft + typeContainerWidth - 75,
              behavior: 'smooth',
            });          
        }
    }

    const handleScrolltypes = ()=>{
        const {scrollWidth, clientWidth, scrollLeft} = typeSearchContainer.current;
        const ifShowRightArrow = scrollWidth - (clientWidth + scrollLeft) >= 1;
        const ifShowLeftArrow = scrollLeft > 10;
        if(showLeftArrow !== ifShowLeftArrow) setShowLeftArrow(ifShowLeftArrow);
        if(showRightArrow !== ifShowRightArrow) setShowRightArrow(ifShowRightArrow);
    }

    const handleSelectType = (item)=>{
        if(searchText === item) dispatch(setSearchValue(""));
        else dispatch(setSearchValue(item));
        dispatch(setIfFetchMainPage(true)); 
    }

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
            <div className='typeSearchContainer flexCenter' ref={typeSearchContainer} onScroll={handleScrolltypes}>
                {
                    TYPELIST.map((type, index)=>{
                        const ifSelected = searchText === type;
                        return (<div key={index}  style={ifSelected? {borderBottom:"3px solid gray"}:{}} className="typeItemContainer flexCenter" onClick={()=>handleSelectType(type)}>
                                    <FontAwesomeIcon icon={faCity} className="navIcons"  />
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
