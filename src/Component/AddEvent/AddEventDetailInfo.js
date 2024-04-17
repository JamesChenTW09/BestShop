import {useState, useRef} from "react";
import AddEventDetailItems from "./AddEventDetailItems";
import "../../Style/AddEvent/AddEventDetailInfo.scss"

import { fetchWithAuth, getArrBySeq, getTagApi,getTourApi } from "../../CommonFunction/commonFunction.js" 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faStar as clickStar} from '@fortawesome/free-solid-svg-icons'
import {faStar as unclickStar} from '@fortawesome/free-regular-svg-icons'


import {  useDispatch, useSelector } from 'react-redux';
import {  addNewItemDetail  } from '../../features/handleInput/addItemInputObj.js';
import {  setTitleHintArr  } from '../../features/handleInput/titleHint.js';



export default function AddEventDetailInfo({formData, setFormData}) {
    const debounceTimer = useRef(null);
    const dispatch = useDispatch();
    const addItemDetailArr = useSelector((state) => state.addItemInputObj.addItemDetailArr);
    const titleHintArr = useSelector((state) => state.titleHint.titleHintArr);
    const screenWidth = useSelector((state) => state.screenSize.screenWidth);
    const smallScreen900 = screenWidth <= 900;


    const handleInputChange = (e)=>{
        let { name, value } = e.target;
        setFormData({...formData, [name]: value});    

        if(name === "name" && value.trim().length !==0){
                let ifFullChar = true;
                if (/[\u4E00-\u9FA5]/.test(value[value.length-1])) {
                    ifFullChar = true;
                } else if (/[\u3100-\u312F\u31A0-\u31BF\u4E00-\u9FA5]/.test(value[value.length-1])) {
                    // 注音
                    ifFullChar = false;
                }
                if(ifFullChar){
                    clearTimeout(debounceTimer.current);
                    debounceTimer.current = setTimeout(() => {
                        fetchWithAuth("get", getTourApi()+"&subtables=0&listing=true&limit=30&offset=0&where=1000130,regex,^"+value).then(result=>{
                            let obj = {};
                            let arr = [];
                            for(let key in result){
                                let name = result[key]["name"];
                                if(obj[name]){
                                    obj[name]++;
                                }else{
                                    obj[name] = 1;
                                }
                            }
                            for(let key in obj){
                                let newObj = {};
                                newObj[key] = obj[key];
                                arr.push(newObj);
                            }

                            dispatch(setTitleHintArr(arr));
                        })

                    }, 300); 
                }
            }else{
                clearTimeout(debounceTimer.current);
                dispatch(setTitleHintArr([]));
            }



        if(name === "tags"){
            let tagHintText = "";
            let ifFetchTagHint = false;
            for(let i = value.length-1; i >= 0; i--){
                let char = value[i];
                if(char !== "#" && char !== " "){
                    tagHintText = char + tagHintText;
                }
                else if(char === " "){
                    ifFetchTagHint = false;
                    break;
                }else if(char === "#"){
                    ifFetchTagHint = true;
                    break;
                }
            }
            if(tagHintText && ifFetchTagHint){
                let ifFullChar = true;
                if (/[\u4E00-\u9FA5]/.test(tagHintText[tagHintText.length-1])) {
                    ifFullChar = true;
                } else if (/[\u3100-\u312F\u31A0-\u31BF\u4E00-\u9FA5]/.test(tagHintText[tagHintText.length-1])) {
                    // 注音
                    ifFullChar = false;
                }
                if(ifFullChar){
                    clearTimeout(debounceTimer.current);
                    debounceTimer.current = setTimeout(() => {
                        fetchWithAuth("get", getTagApi()+"&subtables=0&order=1000144,DESC&limit=50&offset=0&where=1000143,regex,^"+tagHintText).then(result=>{
                            dispatch(setTitleHintArr(getArrBySeq(result)));
                        })
                    }, 300); 
                }
            }else{
                clearTimeout(debounceTimer.current);
                dispatch(setTitleHintArr([]));
            }
        }
    }
    const starList = [1,2,3,4,5];
    const [starCount, setStarCount] = useState(0);
    const handleStarClick = (item)=>{
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

    const inputTitleRef = new useRef(null);
    const handlePasteHintTitle = (text)=>{
        setFormData({...formData, "name": text});   
        inputTitleRef.current.focus();
    }
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
                <input ref={inputTitleRef} className='addEventDetailInputTitle' name='name' onChange={handleInputChange} value={formData.name} type='text' placeholder='店家名稱'></input>
                {titleHintArr.length !== 0?
                        <div className="addDetailHintTitleContainer">
                            {titleHintArr.map(hint=>{
                                let key = Object.keys(hint)[0];
                                return <div key={hint} className="addDetailHintTitleItem flexBetween" onClick={()=>handlePasteHintTitle(key)}>
                                            <span>{key}</span>
                                            <span>{hint[key]}則</span>
                                        </div>
                            })}
                        </div>:null
                }
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
