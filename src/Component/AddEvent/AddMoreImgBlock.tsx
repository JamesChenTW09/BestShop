import React, { useState } from 'react';
import { RootState } from "../../app/store"
import "../../Style/AddEvent/AddMoreImgBlock.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import {  useDispatch, useSelector } from 'react-redux';
import { removeImgFromList, setMainImgByIndex } from '../../features/handleAddImgs/addImgList';

const AddMoreImgBlock: React.FC<{item:string, index: number}> = ({item, index}) => {
    const imgList = useSelector((state:RootState) => state.addImgList.imgList);
    const dispatch = useDispatch();
    const [showDeleteImgIcon, setShowDeleteImgIcon] = useState(false);

    const removeImg = (e: React.MouseEvent<HTMLDivElement>, index: number)=>{
        e.stopPropagation();
        if(imgList.length === 1) return;
        dispatch(removeImgFromList(index))
    }

  return (
        <div className='addMoreImgsItemContainer flexCenter'>
            <img onMouseOut={()=>setShowDeleteImgIcon(false)} onMouseOver={()=>setShowDeleteImgIcon(true)} onClick={()=>dispatch(setMainImgByIndex(index))} className="addMoreImgsItem" src={item} alt='Tour Photo'></img>
            {showDeleteImgIcon && (
                <div className='deleteAddImgIcon flexCenter' onClick={(e)=>removeImg(e,index)} onMouseOut={()=>setShowDeleteImgIcon(false)} onMouseOver={()=>setShowDeleteImgIcon(true)}>
                    <FontAwesomeIcon icon={faXmark} className="navIcons" />
                </div>
            )}
        </div>
  )
}

export default AddMoreImgBlock;