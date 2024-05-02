import React, { useState } from "react";
import "../../Style/AddEvent/AddEventDetailItems.scss"
import { setItemDetailByIndex, removeItemDetailByIndex } from '../../features/handleInput/addItemInputObj';
import {  useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as clickStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as unclickStar, faTrashCan} from '@fortawesome/free-regular-svg-icons'

interface AddTimeDetail{
    data:{
        starCount : number,
        price : string,
        name : string,
        id:string
    },
    index:number
}

const AddTimeDetail: React.FC<AddTimeDetail> = ({data, index}) => {
    const dispatch = useDispatch();
    const [starCount, setStarCount] = useState(0);
    const starList = [1,2,3,4,5];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value } = e.target;
        dispatch(setItemDetailByIndex({name, value, index}));
    }
    const handleStarClick = (item: number)=>{
        if(item === starCount){
            setStarCount(0);
            dispatch(setItemDetailByIndex({name:"starCount", value:0, index}));
        } 
        else{
            setStarCount(item);
            dispatch(setItemDetailByIndex({name:"starCount", value:item, index}));
        } 
    }
  return (
    <div  className='addItemDetailContainer'>
        <div className='itemDetailBasicInfo'>
            <div className="addOrderItemIndex" >{index+1}.</div>
            <input className="addOrderItemName" type='text' placeholder='品項' name='name' onChange={handleInputChange} value={data["name"]}></input>
            <input className="addOrderItemPrice" type='text' placeholder='價錢' name='price' onChange={handleInputChange} value={data["price"]}></input>
        </div>
        <div className="addOrderItemStarsContainer">
            <p className="addOrderItemStarsText">評價</p>
            <div className="addOrderItemStarIconContainer">
                {starList.map((item, index)=>{
                    let ifClick = item <= starCount;
                    return <FontAwesomeIcon key={index} onClick={()=>handleStarClick(item)} icon={ifClick? clickStar:unclickStar} className="navIcons addOrderItemStarIcon" />
                })}
            </div>
            <div className="addOrderItemTrashIcon">
                <FontAwesomeIcon icon={faTrashCan} className="navIcons"  onClick={()=>dispatch(removeItemDetailByIndex(index))} />
            </div>
        </div>
    </div>
  )
}
export default AddTimeDetail;