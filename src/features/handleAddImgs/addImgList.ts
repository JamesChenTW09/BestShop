import { createSlice } from '@reduxjs/toolkit';
import { CropImgPosition } from '../../Types/Types';

interface AddImgListState{
    imgList : string[],
    cropImgList : string[],
    cropImgPositionList : CropImgPosition[],
    selectedMainImgIndex : number,
}
const initialState: AddImgListState  = {
    imgList : [],
    cropImgList : [],
    cropImgPositionList : [],
    selectedMainImgIndex : 0,
}

export const addImgList = createSlice({
    name: 'addImgList',
    initialState,
    reducers: {
        addNewImgToList : (state, action) => {
            state.imgList = [...state.imgList, action.payload];
            state.selectedMainImgIndex = state.imgList.length - 1;
        },
        setMainImgByIndex : (state, action) => {
            state.selectedMainImgIndex = action.payload;
        },
        //[{"cropDefaultPosition":{}, "cropConfirmPosition":{}},{}]
        setImgCropPositionByIndex : (state, action) =>{
            const {index, cropData} = action.payload;
            let newCropImgPositionList = JSON.parse(JSON.stringify(state.cropImgPositionList));
            newCropImgPositionList[index]["cropConfirmPosition"] = cropData;
            state.cropImgPositionList = newCropImgPositionList;
        },
        setImgCropDefaultPositionByIndex : (state, action) =>{
            const {index, cropData} = action.payload;
            let newCropImgPositionList = JSON.parse(JSON.stringify(state.cropImgPositionList));
            newCropImgPositionList[index]["cropDefaultPosition"] = cropData;
            state.cropImgPositionList = newCropImgPositionList;
        },
        addNewImgCropItem : state =>{
            state.cropImgPositionList = [...state.cropImgPositionList, {"cropDefaultPosition":"", "cropConfirmPosition":""}]
        },
        addCropImgList : (state, action) =>{
            state.cropImgList = [...state.cropImgList, action.payload];
        },
        removeAllCropList: state =>{
            state.cropImgList = [];
        },
        removeImgFromList : (state, action) => {
            let index = action.payload;

            state.imgList = state.imgList.filter((item, idx)=> idx !== index);
            state.cropImgList = state.cropImgList.filter((item, idx)=> idx !== index);
            state.cropImgPositionList = state.cropImgPositionList.filter((item, idx)=> idx !== index);

            if(state.selectedMainImgIndex === index){
                state.selectedMainImgIndex = 0;
            }else{
                if(state.selectedMainImgIndex !== 0) state.selectedMainImgIndex = state.selectedMainImgIndex-1;
            }
        },
        removeAllImgFromList : state =>{
            state.imgList = [];
            state.cropImgList = [];
            state.selectedMainImgIndex = 0;
            state.cropImgPositionList = [];
        }
      },
  });


export const {addNewImgToList, setMainImgByIndex, addCropImgList, addNewImgCropItem, removeImgFromList, removeAllImgFromList, removeAllCropList, setImgCropPositionByIndex, setImgCropDefaultPositionByIndex} = addImgList.actions;
export default addImgList.reducer;