import React, {useState, useRef} from "react";
import AddEventDetailItems from "./AddEventDetailItems";
import "../../Style/AddEvent/AddEventDetailInfo.scss"
import { formData } from "../../Types/Types";
import { RootState } from "../../app/store"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faStar as clickStar} from '@fortawesome/free-solid-svg-icons'
import {faStar as unclickStar} from '@fortawesome/free-regular-svg-icons'


import {  useDispatch, useSelector } from 'react-redux';
import {  addNewItemDetail  } from '../../features/handleInput/addItemInputObj';

interface AddEventDetailInfo{
    formData:formData,
    setFormData:React.Dispatch<React.SetStateAction<formData>>
}
const AddEventDetailInfo: React.FC<AddEventDetailInfo> = ({formData, setFormData}) => {
    const dispatch = useDispatch();
    const addItemDetailArr = useSelector((state:RootState) => state.addItemInputObj.addItemDetailArr);
    const screenWidth = useSelector((state:RootState) => state.screenSize.screenWidth);
    const smallScreen900 = screenWidth <= 900;


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>{
        let { name, value } = e.target;
        setFormData({...formData, [name]: value});    
    }
    const starList = [1,2,3,4,5];
    const [starCount, setStarCount] = useState(0);
    const handleStarClick = (item: number)=>{
        let target = "mainStarCount";
        if(item === starCount){
            setStarCount(0);
            setFormData({...formData, [target]: 0});    
        } 
        else{
            setStarCount(item);
            setFormData({...formData, [target]: item});    
        } 
    }

    const addressList = ["台北市","新北市","基隆市","桃園市","新竹市","新竹縣","宜蘭縣","台中市","苗栗縣","彰化縣","南投縣","雲林縣","高雄市","台南市","嘉義市","嘉義縣","屏東縣","澎湖縣","花蓮縣","台東縣","金門縣","連江縣"];
    const typeList = ["餐廳","夜市","早餐","港式","酒吧","咖啡","茶店","西餐","中餐","日式","披薩","牛排","小吃","燒肉","甜點","居酒屋","麵包","其它"];

  return (
    <div className='addEventDetailOutContainer' style={smallScreen900?{}:{overflowY:"scroll"}}>
        <div className='addEventDetailInContainer'>
            <div className="addDetailLocAndTypeContainer flexCenter">
                <div className="addDetailLocContainer">
                    <select className='addEventDetailInputLoc'  name='loc' onChange={handleInputChange}>
                        {addressList.map((address,index)=>{
                            return  <option key={index} value={address}>{address}</option>
                        })}
                    </select>
                </div>
                <div className="addDetailTypeContainer">
                    <select className='addEventDetailInputType' name='type' onChange={handleInputChange}>
                        {typeList.map((type,index)=>{
                            return  <option key={index} value={type}>{type}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className='addDetailTitleContainer flexBetween'>
                <input className='addEventDetailInputTitle' name='name' onChange={handleInputChange} value={formData.name} type='text' placeholder='店家名稱'></input>
            </div>
            <div className="addDetailContentContainer">
                <textarea name="content" value={formData.content} onChange={handleInputChange} className='addDetailContentItem' rows={7} placeholder="評論內容..."></textarea>
            </div>
            <div className="addDetailDateContainer flexBetween">
                <p className="addDetailDateText">造訪日期</p>
                <input className='addDetailDateInput' type="date" name='date' onChange={handleInputChange}></input>
            </div>
            <div className="addDetailRecommendContainer flexBetween">
                <p className="addDetailRecommendText">推薦指數</p>
                <div className="addDetailRecommendStarContainer">
                    {starList.map((item, index)=>{
                        let ifClick = item <= starCount;
                        return <FontAwesomeIcon key={index} onClick={()=>handleStarClick(item)} icon={ifClick? clickStar:unclickStar}  className="navIcons" />
                    })}
                </div>
            </div>
            <div className="addTourItemIconContainer flexCenter">
                <p className="addTourItemIconText" onClick={()=>dispatch(addNewItemDetail())}>新增詳細項目</p>
                <div className="tourDetailButton flexCenter" onClick={()=>dispatch(addNewItemDetail())}>
                    <FontAwesomeIcon icon={faPlus} className="navIcons" />
                </div>
            </div>
            {addItemDetailArr.map((item,index)=>{
                return <AddEventDetailItems key={item["id"]} data={item} index={index}/>
            })}
        </div>
    </div>
  )
}
export default AddEventDetailInfo;