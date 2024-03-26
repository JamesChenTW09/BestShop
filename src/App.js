import { useEffect } from "react";
import Warning from "./UtilComponent/Warning.js";
import "./Style/Main.scss"
import "./Style/Util/Util.scss"

import Header from "./Component/Header/Header.js"
import MainBlock from "./Component/TourBlock/MainBlock";
import TypeSelect from "./Component/Header/NavTypeSelect.js";

import { useDispatch, useSelector } from 'react-redux';
import { removeAllDropDown } from "./features/handleBoolean/toggleDropDown.js"
import { setScreenSize } from "./features/handleScreenSize/screenSize.js"
import { setTitleHintArr } from './features/handleInput/titleHint.js';






export const App = () =>{
    const dispatch = useDispatch();
    const ifShowWarnBlock = useSelector((state) => state.toggleWarnBlock.ifShowWarnBlock);


    useEffect(()=>{
        const handleResize = () => dispatch(setScreenSize(window.innerWidth));
        const handleClick = () => {
            dispatch(removeAllDropDown());
            dispatch(setTitleHintArr([]));
        };
        document.addEventListener("click", handleClick);
        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("click", handleClick);
            window.removeEventListener("resize", handleResize);
        };

    })
    return (
        <>
            {ifShowWarnBlock? <Warning  />:null}
            <Header/>
            <TypeSelect />
            <MainBlock/>
        </>
    )
}
