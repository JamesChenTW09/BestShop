import React, {useState} from 'react'
import "../../Style/AddEvent/AddEventBlock.scss"
import AddEventDetailInfo from './AddEventDetailInfo.js';
import AddEventImgCrop from './AddEventImgCrop.js';
import AddEventDetailImg from './AddEventDetailImg.js';

import { createCurrentDate, getTourApi, fetchWithAuth } from "../../CommonFunction/commonFunction.js" 
import { ADDTOURSTEP } from "../../CommonFunction/Const.js" 
import he from 'he';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faXmark } from '@fortawesome/free-solid-svg-icons'

import {  useDispatch, useSelector } from 'react-redux';
import {  setIfshowAddEventBlock  } from '../../features/handleBoolean/toggleBlock.js';
import {  setIfFetchMainPage  } from '../../features/handleBoolean/toggleFetchData.js';
import {  setItemDetailArrToDefault  } from '../../features/handleInput/addItemInputObj.js';
import { updateWarnText, showWarnBlock, setWarnConfirmFunc, hideScroll } from '../../features/handleBoolean/toggleWarnBlock.js';
import { addCropImgList,addNewImgCropItem, addNewImgToList, removeAllImgFromList, removeAllCropList } from '../../features/handleAddImgs/addImgList.js';



export default function AddEventBlock() {
    const [saving, setSaving] = useState(false);
    const [ifImgLoading, setIfImgLoading] = useState(false);
    const [formData, setFormData] = useState({loc:"台北市", type:"餐廳", name:"", content:"", date:"", mainStarCount:""});
    const [steps, setSteps] = useState(ADDTOURSTEP.INSERTIMG);

    const addItemDetailArr = useSelector((state) => state.addItemInputObj.addItemDetailArr);
    const cropImgPositionList = useSelector((state) => state.addImgList.cropImgPositionList);
    const screenWidth = useSelector((state) => state.screenSize.screenWidth);
    const smallScreen900 = screenWidth <= 900;
    const dispatch = useDispatch();

    const removeAddEvent = () =>{
        if(saving) return;
        dispatch(removeAllImgFromList());
        dispatch(setItemDetailArrToDefault());
        dispatch(setIfshowAddEventBlock(false));
    } 

    const uploadNewImg = (e)=>{
        if(ifImgLoading) return;
        if(steps !== ADDTOURSTEP.IMGCROP) setSteps(ADDTOURSTEP.IMGCROP);
        dispatch(addNewImgCropItem());
        setIfImgLoading(true);
        setTimeout(() => {
            let file = e.target.files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                setIfImgLoading(false);
                dispatch(addNewImgToList(e.target.result))
        };
        reader.readAsDataURL(file);
        e.target.value = "";
        }, 400);
    }

  const saveAddEvent = ()=>{
    if(saving) return;
    if(steps === ADDTOURSTEP.INSERTIMG) return;
    //empty check
    let ifPreventSave = false;
    console.log(formData);
    if(!formData["name"]){
        dispatch(updateWarnText("請輸入店家名稱"));
        ifPreventSave = true;
    }
    else if(!formData["loc"]){
        dispatch(updateWarnText("請選擇地點"));
        ifPreventSave = true;
    }
    else if(!formData["type"]){
        dispatch(updateWarnText("請選擇類型"));
        ifPreventSave = true;
    }
    else if(!formData["date"]){
        dispatch(updateWarnText("請選擇造訪日期"));
        ifPreventSave = true;
    }
    else if(!formData["mainStarCount"]){
        dispatch(updateWarnText("請選擇推薦指數"));
        ifPreventSave = true;
    }
    let emptySubName = addItemDetailArr.find(item=>item["name"].length === 0);
    let emptySubPrice = addItemDetailArr.find(item=>item["price"].length === 0);
    let stringSubPrice = addItemDetailArr.find(item=>!isFinite(item["price"]));
    let emptySubStar = addItemDetailArr.find(item=>item["starCount"] === 0);
    if(!ifPreventSave){
        if(emptySubName){
            dispatch(updateWarnText("請輸入細項名稱"));
            ifPreventSave = true;
        }else if(emptySubPrice){
            dispatch(updateWarnText("請輸入細項價錢"));
            ifPreventSave = true;
        }else if(emptySubStar){
            dispatch(updateWarnText("請選擇細項評價"));
            ifPreventSave = true;
        }else if(stringSubPrice){
            dispatch(updateWarnText("價錢請輸入數字"));
            ifPreventSave = true;
        }
    }

    if(ifPreventSave){
        dispatch(showWarnBlock(true));
        dispatch(hideScroll(true));
        setWarnConfirmFunc(null);
        return;
    }
    //start saving
    setSaving(true);

    setTimeout(() => {
        let imgList = document.querySelectorAll(".finalImgsItem");
        async function convertImagesToBlob(imgList){
            const promises = [];
            for(let i = 0; i < imgList.length; i++){
                let imgItem = imgList[i];
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                canvas.width = 900;
                canvas.height = 600;
                ctx.drawImage(imgItem, 0, 0, canvas.width, canvas.height);

                const promise = new Promise(resolve => {
                    canvas.toBlob(blob => {
                      resolve(new File([blob], "shopImage.webp", { type: "image/webp" }));
                    },'image/webp', 0.8);
                  });
              
                promises.push(promise);
            }
            const blobs = await Promise.all(promises);
            return blobs;
        }

        convertImagesToBlob(imgList).then(res=>{
            const submitFormData = new FormData();

            submitFormData.append("1000130", he.escape(formData["name"]));
            submitFormData.append("1000131", createCurrentDate());
            submitFormData.append("1000165", he.escape(formData["loc"]));
            submitFormData.append("1000164", he.escape(formData["content"]));
            submitFormData.append("1000166", he.escape(formData["date"]));
            submitFormData.append("1000168", formData["mainStarCount"]);
            submitFormData.append("1000167", he.escape(formData["type"]));
            res.forEach(item=>{
                submitFormData.append("1000148", item);   
            })
            submitFormData.append("1000140", 0);
            submitFormData.append("1000141", 0);

            for(let i = 1; i <= addItemDetailArr.length; i++){
              const item = addItemDetailArr[i-1];
              submitFormData.append("1000134_"+-i, i-1);
              submitFormData.append("1000135_"+-i,he.escape(item["price"]));
              submitFormData.append("1000136_"+-i,he.escape(item["name"]));
              submitFormData.append("1000169_"+-i,item["starCount"]);
            }

            fetchWithAuth("post", getTourApi(), submitFormData).then(result=>{
                if(result["status"] === "SUCCESS") {
                    localStorage.setItem(result["ragicId"]+"_owner", 1);
                    setSaving(false);
                    removeAddEvent();
                    dispatch(setIfFetchMainPage(true));
                    dispatch(setItemDetailArrToDefault());
                }
            })
        });
   }, 500);
  }
  
const cropImgUtil = (index, img)=>{
    const {cropDefaultPosition, cropConfirmPosition} = cropImgPositionList[index];
    let cropDetail = cropDefaultPosition;
    if(cropConfirmPosition) cropDetail = cropConfirmPosition;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = cropDetail.width;
    canvas.height = cropDetail.height;  
    ctx.drawImage(
        img,
        cropDetail.x,
        cropDetail.y,
        cropDetail.width,
        cropDetail.height,
        0,
        0,
        cropDetail.width,
        cropDetail.height
      );
    let newBase = canvas.toDataURL("image/webp");
    dispatch(addCropImgList(newBase));
}

const toStepInsertData = ()=>{
    setSaving(true);
    setTimeout(() => {
        let insertImgs = document.querySelectorAll(".addMoreImgsItem");
        for(let i = 0; i < insertImgs.length; i++){
            cropImgUtil(i, insertImgs[i])
        }
        setSteps(ADDTOURSTEP.INSERTDATA);
        setSaving(false);
    }, 300);
}
const toPreviousStep = ()=>{
    if(saving) return;
    const currentStep = steps;
    if(currentStep === ADDTOURSTEP.IMGCROP){
        dispatch(removeAllImgFromList());
        setSteps(ADDTOURSTEP.INSERTIMG);
    }else if(currentStep === ADDTOURSTEP.INSERTDATA){
        setFormData({loc:"台北市", type:"餐廳", name:"", content:"", date:"", mainStarCount:""});
        dispatch(setItemDetailArrToDefault());
        dispatch(removeAllCropList());
        setSteps(ADDTOURSTEP.IMGCROP);
    }
}

  return (  
    <>
        <div className='addEventBlockOutContainer'  style={steps === ADDTOURSTEP.INSERTDATA && !smallScreen900? {width:"800px"}:{}} >
            <div className='addEventTitleContainer flexBetween'>
                <div className='cancelAddNewEvent' onClick={steps === ADDTOURSTEP.INSERTIMG? removeAddEvent:toPreviousStep} style={saving?{cursor:"not-allowed"}:{cursor:"pointer"}}>
                    {steps === ADDTOURSTEP.INSERTIMG? "取消" : "上一步"}
                </div>
                <div>新增行程</div>
                <div className='saveAddNewEvent flexCenter' style={steps === ADDTOURSTEP.INSERTIMG? {visibility:"hidden"}:{visibility:"visible"}} onClick={steps === ADDTOURSTEP.IMGCROP? toStepInsertData : saveAddEvent }>
                    {saving? <div className='saveLoading'></div>:""}
                    {steps === ADDTOURSTEP.IMGCROP? "下一步":"儲存"}
                </div>
            </div>
            <input accept='.jpg,.png,.webp' onChange={uploadNewImg} id="fileInput" type="file" style={{display: "none"}}></input>
            <div className='addEventBlockInContainer'>
                <div className='savingDarkBackground' style={saving?{display:"block"}:{display:"none"}}></div>
                {steps === ADDTOURSTEP.INSERTIMG? 
                    <div className='addEventFirstImgContainer'>
                            <div className='firstImgUploadContainer flexCenter'>
                                <FontAwesomeIcon icon={faImage} className="navIcons" />
                                <h3 className="addFirstImgText">來上傳一張行程照片吧!!</h3>
                                <label className="addFirstImgLabel" htmlFor="fileInput">從電腦選擇</label>
                            </div>
                    </div>:
                    <div className='addEventDetailAndCropImgContainer'>
                        {steps === ADDTOURSTEP.IMGCROP? 
                            <AddEventImgCrop ifImgLoading={ifImgLoading}/>
                            :
                            <>
                                <AddEventDetailImg />
                                <AddEventDetailInfo formData={formData} setFormData={setFormData}/>
                            </>
                        }
                    </div>
                }
            </div>
        </div>
        <div onClick={removeAddEvent} className='addEventBackground flexCenter' >
              <div onClick={removeAddEvent} className='xmarkContainer'>
                  <FontAwesomeIcon icon={faXmark} className="navIcons" />
              </div>
        </div>
    </>
  )
}
