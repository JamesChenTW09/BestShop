import { APIKEY } from "./Const";
import {TourObjectItem, IndexedObject} from "../Types/Types"


interface FetchBody{
    method:string,
    headers:Headers,
    body?:FormData
}
export async function fetchWithAuth(method: string, api: string, body?:FormData){
    const fetchSetUp:FetchBody = {
        method,
        "headers":new Headers({
            "Authorization": APIKEY
        })
    }
    if(body) fetchSetUp.body = body;
    const response =  await fetch(api, fetchSetUp);
    const result = await response.json();
    return result;
}
export function setStateArrValueByIndex(index: number, value: TourObjectItem, fn: (updateFn: (prevState: TourObjectItem[]) => TourObjectItem[]) => void): void {
    fn((prevState: TourObjectItem[]) => {
        const updatedArray = prevState.slice();
        updatedArray[index] = value;
        return updatedArray;
    });
}

// param obj is{1:{}, 2:{}}
export function getArrBySeq(obj: { [key: string]: IndexedObject }) : IndexedObject[]{
    let arr  = []
    for(let item in obj){
      let seq = obj[item]["_seq"];
      arr[seq] = obj[item];
    }
    return arr;
}

export function getTagApi(id: string){
    if(id) return "https://ap9.ragic.com/js1031222/tour/4/"+id+"?api&v=3";
    else return "https://ap9.ragic.com/js1031222/tour/4?api&v=3";
}

export function getTourApi(id?: string){
    if(id) return "https://ap9.ragic.com/js1031222/tour/2/"+id+"?api&v=3";
    else return "https://ap9.ragic.com/js1031222/tour/2?api&v=3";
}

export function createCurrentDate(){
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month: number | string= currentDate.getMonth() + 1;
    let day: number | string = currentDate.getDate();
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    return year + "/" + month + "/" + day;
}

export function debounce(func: Function, delay: number): ()=> void {
    let timerId: NodeJS.Timeout | undefined;
    return function() {
      if(timerId !== undefined)clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(null, arguments);
      }, delay);
    }
  }

