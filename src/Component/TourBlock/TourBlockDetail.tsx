import React, { useState, useEffect } from 'react';
import TourBlockDetailItem from './TourBlockDetailItem'
import { TourObjectItem, TourSubObjectItem } from '../../Types/Types';
import "../../Style/TourBlock/TourBlockDetail.scss"

import { getTourApi, fetchWithAuth } from "../../CommonFunction/commonFunction"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,  faHeart as like  } from '@fortawesome/free-solid-svg-icons'
import { faHeart as dislike } from '@fortawesome/free-regular-svg-icons'

import { useDispatch } from 'react-redux';
import { setIfShowBlockDetail } from '../../features/handleBoolean/toggleBlock';

interface TourDetailObjectItem {
  data:TourObjectItem,
  likeHeartCount: number,
  setLikeHeartCount: React.Dispatch<React.SetStateAction<number>>
}


const TourBlockDetail: React.FC<TourDetailObjectItem> =  ({data, likeHeartCount, setLikeHeartCount}) => {
  let { file, id, name, content, address, type, visitTime } = data;
  const ifMultiImg = Array.isArray(file);

  const [likeHeart, setLikeHeart] = useState(false);
  const [orderItemDetail, setOrderItemDetail] = useState<TourSubObjectItem[]>([]);
  const [mainImg, setMainImg] = useState<string | string[]>("");

  const dispatch = useDispatch();

  useEffect(() => {
    setItemDetailOrder();
    setMainImg(ifMultiImg ? file[0] : file);
    const cachedUserData = localStorage.getItem(id+"_like");
    if(cachedUserData) setLikeHeart(true);
  }, []);
    
  const setItemDetailOrder = () =>{
    if(data["_subtable_1000139"]){
      let itemDetailArr:TourSubObjectItem[] = Object.values(data["_subtable_1000139"]);
      let newItemDetailArr: TourSubObjectItem[] = [];
      itemDetailArr.forEach(item=>{
        newItemDetailArr[Number(item.index)] = item;
      })
      setOrderItemDetail(newItemDetailArr);
    }
  }


  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    let currentLikeCount = likeHeartCount;
    if(likeHeart){
        localStorage.removeItem(id+"_like");
        setLikeHeartCount(preState => preState-1);
        currentLikeCount--;
    } 
    else{
        localStorage.setItem(id+"_like", "1");
        setLikeHeartCount(preState => preState+1);
        currentLikeCount++;
    }
    setLikeHeart(preState => !preState);
    const submitFormData = new FormData();
    submitFormData.append("1000140", currentLikeCount.toString());
    try{
      fetchWithAuth("post", getTourApi(id), submitFormData)
    }catch(e){
      console.log("error " +e);
    }
  }
  return (
    <>
        <div className='tourBlockDetailContainer'>
          <div className='tourBlockDetail'>
            <div className="tourBlockDetailTitle flexCenter">
                  <h3>{name}</h3>
            </div>
            <div className="tourBlockDetailMainImgContainer">
              {mainImg?<img className='tourBlockDetailMainImgItem' src={"https://ap9.ragic.com/sims/file.jsp?a=js1031222&f="+mainImg} alt="Tour Photo"></img>:""}
            </div>
            <div className="tourBlockDetailMoreImgContainer">
             {Array.isArray(file)? 
                file.map(item=>{
                    return <img className='tourBlockDetailMoreImgItem' onClick={()=>{setMainImg(item)}}  src={"https://ap9.ragic.com/sims/file.jsp?a=js1031222&f="+item} alt='Tour Photo'></img>
                })
                :
                <img className='tourBlockDetailMoreImgItem' src={"https://ap9.ragic.com/sims/file.jsp?a=js1031222&f="+file} alt='Tour Photo'></img>
              }
            </div>
            <div className='tourBlockDetailContentContainer'>
              <div className='tourBlockDetailAddressAndType'>
                <div className='tourBlockDetailSmallItem'>{address}</div>
                <div className='tourBlockDetailSmallItem'>{type}</div>
                <div className='tourBlockDetailSmallItem'>{visitTime}造訪</div>
              </div>
              <div className='tourBlockDetailContent'>
                {content}
              </div>
            </div>
            <div className='tourBlockDetailTimeTitle flexBetween'>
              <span>品項</span>
              {likeHeart? 
              <FontAwesomeIcon onClick={handleLikeClick} icon={like} className="navIcons" />:
              <FontAwesomeIcon onClick={handleLikeClick} icon={dislike} className="navIcons" />
              }
            </div>
            {orderItemDetail.map((item)=>{
              return <TourBlockDetailItem key={item["_ragicId"]} data={item}/>
            })}
          </div>
        </div>
        <div className='darkBackground flexCenter' onClick={()=>dispatch(setIfShowBlockDetail({id, ifShow:false}))}>
              <div className='xmarkContainer'>
                  <FontAwesomeIcon icon={faXmark} className="navIcons" />
              </div>
        </div>
    </>
  )
}


export default TourBlockDetail;