import React, { Suspense, useState, useEffect } from "react";
import "../../Style/TourBlock/MainBlock.scss"
import TourBlock from "./TourBlock.js";
import TempTourBlock from "./TempTourBlock.js";
import { setStateArrValueByIndex, getArrBySeq, getTourApi, fetchWithAuth, debounce } from "../../CommonFunction/commonFunction.js" 
import { useSelector, useDispatch } from 'react-redux';
import { setIfFetchMainPage } from '../../features/handleBoolean/toggleFetchData.js';

const AddEventComponent = React.lazy(() => import('../AddEvent/AddEventBlock.js'));

export default function MainBlock() {
  const tempTourList = Array.from({length:10});
  const [tourList, setTourList] = useState([]);
  const [ifScrollToBottom, setIfScrollToBottom] = useState(false);
  const [offset, setOffset] = useState(0);  

  const dispatch = useDispatch();
  const addEventBlock = useSelector(state => state.toggleBlock.addEventBlock);
  const searchText = useSelector(state => state.searchText.searchText);
  const ifReFetchMainPage = useSelector(state => state.toggleFetchData.ifReFetchMainPage);
  const orderKey = useSelector(state => state.orderObj.orderKey);
  
  useEffect(() => {
    const handleScroll = debounce(function() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-1) {
          setIfScrollToBottom(true);
        }
    }, 300);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetchMainData();
}, [ifReFetchMainPage, ifScrollToBottom]);

  const fetchMainData = () =>{
    if(ifReFetchMainPage || ifScrollToBottom) {
      let api = `${getTourApi()}&limit=15&offset=${ifScrollToBottom ? offset : 0}`; 
      if (orderKey) api += `&order=${orderKey},DESC`;      
      if (searchText) api += `&fts=${searchText}`;

      if(!ifScrollToBottom) {
        setOffset(0);
        setTourList([]);
        window.scrollTo({top: 0});
      }
      try{
        fetchWithAuth("get", api).then(result=>{
          if(Object.keys(result).length !== 0){
            if(!ifScrollToBottom){
              for(let item in result){
                let seq = result[item]["_seq"];
                setStateArrValueByIndex(seq, result[item], setTourList);
              } 
              setOffset(15);
            }
            else{
              const mergedArray = tourList.concat(getArrBySeq(result));
              setTourList(mergedArray);
              setOffset(prevOffset => prevOffset + 15);
            }
          }
          setIfScrollToBottom(false);
          dispatch(setIfFetchMainPage(false));
        })
        }catch(error){
          console.log("error: "+error);
        }
    }
  }


  return (
    <main className="mainBlockContainer">
      <div className="mainBlock">
        {tourList.length === 0 && ifReFetchMainPage? tempTourList.map((item, index)=>{
          return <TempTourBlock key={index}/>
        }): tourList.map((item)=>{
          if(item) return <TourBlock key={item["_ragicId"]} data={item}/>
        })
        }
      </div>
      {addEventBlock? 
      <Suspense>
          <AddEventComponent />
      </Suspense>
      :""}
    </main>
  )
}

