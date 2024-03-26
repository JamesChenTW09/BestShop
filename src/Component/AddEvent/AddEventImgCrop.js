import { useState } from "react";
import "../../Style/AddEvent/AddEventImgCrop.scss"
import AddImgBlock from './AddMoreImgBlock.js';

import Cropper from 'react-easy-crop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons'

import {  useDispatch, useSelector } from 'react-redux';
import {  setImgCropPositionByIndex, setImgCropDefaultPositionByIndex } from '../../features/handleAddImgs/addImgList.js';




export default function AddImgCrop({ifImgLoading}) {
    const imgList = useSelector((state) => state.addImgList.imgList);
    const selectedMainImgIndex = useSelector((state) => state.addImgList.selectedMainImgIndex);
    const cropImgPositionList = useSelector((state) => state.addImgList.cropImgPositionList);

    const imgCropDefaultPosition = cropImgPositionList[selectedMainImgIndex]["cropDefaultPosition"];
    const imgCropConfirmPosition = cropImgPositionList[selectedMainImgIndex]["cropConfirmPosition"];
    const dispatch = useDispatch();
    
    const [crop, setCrop] = useState({ x: 0, y: 0});
    const [zoom, setZoom] = useState(1);

    const [croppedAreaPixel, setCroppedAreaPixel] = useState(null);
    let currentCropAreaPixel = null;
  
    const onCropComplete = (croppedArea, croppedAreaPixels) => {
      setCroppedAreaPixel(croppedAreaPixels);
      currentCropAreaPixel = croppedAreaPixels;
    }

    const onInteractionEnd = ()=>{
        const {x, y, width, height} = currentCropAreaPixel || croppedAreaPixel;
        let cropData = {x: x, y: y, width, height};
        dispatch(setImgCropPositionByIndex({index:selectedMainImgIndex, cropData}))
    }
      
    const onMediaLoaded = ()=>{
        if(imgCropDefaultPosition) return;
        if(croppedAreaPixel){
            dispatch(setImgCropDefaultPositionByIndex({index:selectedMainImgIndex, cropData:croppedAreaPixel}));
        }
    }

  return (
    <div className='addEventCropImgContainer'>
        <div className="spinner"></div>
        {imgList[selectedMainImgIndex]? 
        <>
            <div id='selectedMainAddImageContainer'>
                <Cropper
                    key={selectedMainImgIndex}
                    image={imgList[selectedMainImgIndex]}
                    crop={crop}
                    zoom={zoom}
                    objectFit={"cover"}
                    aspect={3 / 2}
                    onCropChange={setCrop}
                    onMediaLoaded={onMediaLoaded}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                    onInteractionEnd={onInteractionEnd}
                    initialCroppedAreaPixels={imgCropConfirmPosition && !ifImgLoading? imgCropConfirmPosition:null}
                />
            </div>
            <div className='addMoreImgsContainer'>
                {imgList.map((item, index)=>{
                    return  <AddImgBlock key={index} index={index} item={item}/>
                })}
                {ifImgLoading?  
                <div className='addMoreImgsTempItem flexCenter'>                            
                    <FontAwesomeIcon icon={faSpinner} className="navIcons" spin />
                </div>:null}
                <div className='addMoreImgsItemIcon'>
                    <label htmlFor="fileInput">
                            <FontAwesomeIcon  icon={faPlus} className="navIcons" />
                    </label>
                </div>
            </div>
        </>:null}
    </div>
  )
}
