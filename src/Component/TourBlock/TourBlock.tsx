import React, { useState, Suspense } from 'react'
import { getTourApi, fetchWithAuth } from "../../CommonFunction/commonFunction"
import { TourObjectItem } from '../../Types/Types'
import "../../Style/TourBlock/TourBlock.scss"
import { RootState } from "../../app/store"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as dislike, faStar as unClickStar } from '@fortawesome/free-regular-svg-icons'
import { faEye, faArrowRight, faArrowLeft, faTrashCan, faStar as clickStar } from '@fortawesome/free-solid-svg-icons'

import { useSelector, useDispatch } from 'react-redux';
import { setIfShowBlockDetail } from '../../features/handleBoolean/toggleBlock';
import { updateWarnText, showWarnBlock, setWarnConfirmFunc } from '../../features/handleBoolean/toggleWarnBlock';
import { setIfFetchMainPage } from '../../features/handleBoolean/toggleFetchData';


const TourBlockDetail = React.lazy(() => import('./TourBlockDetail'));

const TourBlock: React.FC<{ data: TourObjectItem }> = ({ data }) => {
    const { like, view, id, _ragicId, file, name, createTime, stars, address, type} = data; 
    const hasMultipleImages = Array.isArray(file);
    const starCountArr = [1,2,3,4,5];
    const cachedUserData = localStorage.getItem(_ragicId+"_owner");

    const [likeHeartCount, setLikeHeartCount] = useState(Number(like));
    const [viewCount, setViewCount] = useState(Number(view));
    const [showArrow, setShowArrow] = useState(false);

    const ifShowBlockDetail = useSelector((state:RootState) => state.toggleBlock.tourDetailBlock[id]);
    const dispatch = useDispatch();

    const handleShowTourDetail = () => {
        let newViewCount = viewCount + 1;
        setViewCount(preState => preState + 1);
        dispatch(setIfShowBlockDetail({id, ifShow:true}));
        const submitFormData = new FormData();
        submitFormData.append("1000141", newViewCount.toString());
        try{
            fetchWithAuth("post", getTourApi(id), submitFormData)
        }catch(e){
            console.log("error "+ e);
        }
  }

  const [imgTranslate, setImgTranslate] = useState(0);
  const handleShowNextImg = (e: React.MouseEvent<HTMLDivElement>)=>{
    e.stopPropagation();
    let maxTranslate = (file.length - 1) * -360;
    if(imgTranslate === maxTranslate) return;
    setImgTranslate(preState => preState - 360);
  }
  const handleShowPreImg = (e: React.MouseEvent<HTMLDivElement>)=>{
    e.stopPropagation();
    if(imgTranslate === 0) return;
    setImgTranslate(preState => preState + 360);
  }

  const deleteTourBlock = (e: React.MouseEvent)=>{
    e.stopPropagation();
    dispatch(updateWarnText("確定刪除嗎"));
    dispatch(showWarnBlock(true));
    setWarnConfirmFunc(removeTourBlock);
  }
  const removeTourBlock = (e: React.MouseEvent)=>{
    fetchWithAuth("delete", getTourApi(_ragicId)).then(()=>{
        dispatch(setIfFetchMainPage(true));
    })
  }
  return (
    <section className='tourBlockItemContainer'> 
        <div className='tourBlockItem' onClick={handleShowTourDetail} onMouseOver={()=>setShowArrow(true)} onMouseOut={()=>setShowArrow(false)}>
            {showArrow  && hasMultipleImages && (
                <>
                    <div className='nextImgButton flexCenter imgArrowButton' onClick={handleShowNextImg} style={imgTranslate !== (file.length-1) * -360? {display:"flex", pointerEvents:"auto"}:{display:"none", pointerEvents:"none"}}>
                        <FontAwesomeIcon icon={faArrowRight} className="navIcons" />
                    </div>  
                    <div className='preImgButton flexCenter imgArrowButton' onClick={handleShowPreImg} style={imgTranslate !== 0? {display:"flex"}:{display:"none"}}>
                        <FontAwesomeIcon icon={faArrowLeft} className="navIcons" />
                    </div>
                </>
            )}
            <div className='tourItemImgContainer' style={{transform:`translate(${imgTranslate}px)`}}>
                {hasMultipleImages? 
                    file.map((image, index)=>{
                        return <img key={index} className='tourItemImg'  src={"https://ap9.ragic.com/sims/file.jsp?a=js1031222&f="+image} alt='Tour Photo'></img>
                    })
                    :
                    <img className='tourItemImg' src={"https://ap9.ragic.com/sims/file.jsp?a=js1031222&f="+file} alt='Tour Photo'></img>
                }
            </div>
            <div className='tourInfoContainer'>
                <div className='tourBlockDateilItem'>{address}</div>
                <div className='tourBlockDateilItem'>{type}</div>
            </div>
            <div className='tourItemTitleContainer flexBetween'>
                <div className='tourItemTitle'>
                    {name}
                </div>
                <div className='tourBlockStarContainer'>
                    {starCountArr.map((star,index)=>{
                        return <FontAwesomeIcon key={index} icon={star <= stars? clickStar:unClickStar} className="navIcons" />
                    })}
                </div>
            </div>
            <div className='tourItemExtraInfoContainer flexBetween' >
                <div className='tourItemAddTime'>{createTime}</div>
                <div className='tourItemIconContainer'>
                    <FontAwesomeIcon icon={faEye} className="navIcons" />
                    <span>{viewCount}</span>
                    <FontAwesomeIcon icon={dislike} className="navIcons" />
                    <span>{likeHeartCount}</span>
                    {cachedUserData? 
                        <FontAwesomeIcon onClick={deleteTourBlock} icon={faTrashCan} className="navIcons deleteTourIcon" />
                    :null}
                </div>  
            </div>
        </div>
        {ifShowBlockDetail && (
        <Suspense>
           <TourBlockDetail likeHeartCount={likeHeartCount} setLikeHeartCount={setLikeHeartCount} data={data} />
        </Suspense>
        )}
    </section>
  )
}

export default TourBlock;