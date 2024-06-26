import React from "react";
import "../../Style/Header/NavOrderSelect.scss"
import filterSvg from "../../Imgs/filter.svg"
import { RootState } from "../../app/store"
import { useDispatch, useSelector } from 'react-redux';
import { setIfFetchMainPage  } from '../../features/handleBoolean/toggleFetchData';
import { setOrderObj } from '../../features/handleInput/orderObj';
import { showDropDown, removeAllDropDown } from '../../features/handleBoolean/toggleDropDown';

const NavTagSelect: React.FC = () => {
    const orderText = useSelector((state:RootState) => state.orderObj.orderText);
    const ifShowOrderDropDown = useSelector((state:RootState) => state.toggleDropDown.orderDropDown);
    const screenWidth = useSelector((state:RootState) => state.screenSize.screenWidth);
    const smallScreen800 = screenWidth <= 800;
    const smallScreen550 = screenWidth <= 550;
    const dispatch = useDispatch();

    const handleChangeOrder = (orderKey: number, orderText: string) => {
        dispatch(setOrderObj({orderKey, orderText}));
        dispatch(setIfFetchMainPage(true));
    };
    const toggleOrderDropDown = (e: React.MouseEvent<HTMLDivElement>)=>{
        e.stopPropagation();
        dispatch(removeAllDropDown());
        dispatch(showDropDown({ key: "orderDropDown", ifShow: !ifShowOrderDropDown }));
    }
  return (
    <div className="orderListContainer" onClick={toggleOrderDropDown}>
        <div className="orderListButton flexCenter">
            <img alt="filter svg" className="orderFilterImg" src={filterSvg}></img>
            {smallScreen800? 
                smallScreen550? null:
                <span className="orderFilterText">{orderText}</span>:
                <span className="orderFilterText">篩選條件 - {orderText}</span>    
            }
            {ifShowOrderDropDown? 
                <div className="orderDropDownContainer">
                    <div className="orderDropDownItem" onClick={() => handleChangeOrder(1000142, "最新")}>最新</div>
                    <div className="orderDropDownItem" onClick={() => handleChangeOrder(1000141, "最多查看")}>最多查看</div>
                    <div className="orderDropDownItem" onClick={() => handleChangeOrder(1000140, "最多喜愛")}>最多喜愛</div>
                </div>:null
            }
        </div>
    </div>
  )
}
export default NavTagSelect;