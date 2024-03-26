import "../../Style/Header/NavOrderSelect.scss"
import filterSvg from "../../Imgs/filter.svg"

import {  useDispatch, useSelector } from 'react-redux';
import {  setIfFetchMainPage  } from '../../features/handleBoolean/toggleFetchData.js';
import { setOrderObj } from '../../features/handleInput/orderObj.js';
import {  showDropDown, removeAllDropDown  } from '../../features/handleBoolean/toggleDropDown.js';

export default function NavTagSelect() {
    const orderText = useSelector((state) => state.orderObj.orderText);

    const ifShowOrderDropDown = useSelector(state => state.toggleDropDown.orderDropDown);
    const screenWidth = useSelector(state => state.screenSize.screenWidth);
    const smallScreen800 = screenWidth <= 800;
    const smallScreen550 = screenWidth <= 550;
    const dispatch = useDispatch();

    const handleChangeOrder = (orderKey,e) => {
        const orderText = e.target.textContent;
        dispatch(setOrderObj({orderKey, orderText}));
        dispatch(setIfFetchMainPage(true));
    };

    const toggleOrderDropDown = (e)=>{
        e.stopPropagation();
        dispatch(removeAllDropDown());
        dispatch(showDropDown({key:"orderDropDown", ifShow:!ifShowOrderDropDown}));
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
                    <div className="orderDropDownItem" onClick={(e) => handleChangeOrder(1000142, e)}>最新</div>
                    <div className="orderDropDownItem" onClick={(e) => handleChangeOrder(1000141, e)}>最多查看</div>
                    <div className="orderDropDownItem" onClick={(e) => handleChangeOrder(1000140, e)}>最多喜愛</div>
                </div>:null
            }
        </div>
    </div>
  )
}
