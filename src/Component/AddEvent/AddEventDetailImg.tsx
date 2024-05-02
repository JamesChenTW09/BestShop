import React,{ useState } from 'react';
import "../../Style/AddEvent/AddEventDetailImg.scss"
import { RootState } from "../../app/store"

import {  useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const AddEventDetailImg: React.FC = () => {
    const cropImgList = useSelector((state:RootState) => state.addImgList.cropImgList);
    const screenWidth = useSelector((state:RootState) => state.screenSize.screenWidth);
    const smallScreen900 = screenWidth <= 900;
    const imgScrollWidth = smallScreen900? 320 : 480;

    const [imgTranslate, setImgTranslate] = useState(0);
    const [showArrow, setShowArrow] = useState(false);

    const handleShowNextImg = (e: React.MouseEvent<HTMLDivElement>)=>{
      e.stopPropagation();
      let maxTranslate = (cropImgList.length - 1) * -imgScrollWidth;
      if(imgTranslate === maxTranslate) return;
      setImgTranslate(preState => preState - imgScrollWidth);
    }
    const handleShowPreImg = (e: React.MouseEvent<HTMLDivElement>)=>{
      e.stopPropagation();
      if(imgTranslate === 0) return;
      setImgTranslate(preState => preState + imgScrollWidth);
    }
  return (
    <div className='finalImgsUploadContainer' onMouseOver={()=>setShowArrow(true)} onMouseOut={()=>setShowArrow(false)}>
        {cropImgList.length === 0?
            <div className="spinner"></div>
            :
            <div className='finalImgsContainer' style={{transform:`translate(${imgTranslate}px)`}} >
                {cropImgList.map((item,index)=>{
                    return <img key={index} className='finalImgsItem' src={item} alt='tour photo'></img>
                })}
            </div>                    
        }
        {showArrow  && Array.isArray(cropImgList) && (
            <>
                <div className='nextImgButton flexCenter imgArrowButton' onClick={handleShowNextImg} style={imgTranslate !== (cropImgList.length-1) * -imgScrollWidth? {display:"flex"}:{display:"none"}}>
                    <FontAwesomeIcon icon={faArrowRight} className="navIcons" />
                </div>  
                <div className='preImgButton flexCenter imgArrowButton' onClick={handleShowPreImg} style={imgTranslate !== 0? {display:"flex"}:{display:"none"}}>
                    <FontAwesomeIcon icon={faArrowLeft} className="navIcons" />
                </div>
            </>
        )}
    </div>
  )
}

export default AddEventDetailImg;