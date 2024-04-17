import { APIKEY } from "./Const";


export async function fetchWithAuth(method, api, body){
    const fetchSetUp = {
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
export function setStateArrValueByIndex(index, value, fn){
    fn(prevState => {
        const updatedArray = prevState.slice();
        updatedArray[index] = value;
        return updatedArray;
    });
}

// param obj is{1:{}, 2:{}}
export function getArrBySeq(obj){
    let arr  = []
    for(let item in obj){
      let seq = obj[item]["_seq"];
      arr[seq] = obj[item];
    }
    return arr;
}

export function getTagApi(id){
    if(id) return "https://ap9.ragic.com/js1031222/tour/4/"+id+"?api&v=3";
    else return "https://ap9.ragic.com/js1031222/tour/4?api&v=3";
}

export function getTourApi(id){
    if(id) return "https://ap9.ragic.com/js1031222/tour/2/"+id+"?api&v=3";
    else return "https://ap9.ragic.com/js1031222/tour/2?api&v=3";
}

export function createCurrentDate(){
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    return year + "/" + month + "/" + day;
}

export function debounce(func, delay) {
    let timerId;
    return function() {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    }
  }

