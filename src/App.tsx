import React, { useEffect } from "react";
import Warning from "./UtilComponent/Warning.tsx";
import { RootState } from "./app/store"

import "./Style/Main.scss"
import "./Style/Util/Util.scss"

import Header from "./Component/Header/Header.tsx"
import MainBlock from "./Component/TourBlock/MainBlock.tsx";
import TypeSelect from "./Component/Header/NavTypeSelect.tsx";

import { useDispatch, useSelector } from 'react-redux';
import { removeAllDropDown } from "./features/handleBoolean/toggleDropDown.ts"
import { setScreenSize } from "./features/handleScreenSize/screenSize.ts"



export const App = () =>{
    const dispatch = useDispatch();
    const ifShowWarnBlock = useSelector((state:RootState) => state.toggleWarnBlock.ifShowWarnBlock);


    useEffect(()=>{
        const handleResize = () => dispatch(setScreenSize(window.innerWidth));
        const handleClick = () => {
            dispatch(removeAllDropDown());
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
