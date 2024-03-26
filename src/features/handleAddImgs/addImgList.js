import { createSlice } from '@reduxjs/toolkit';


export const addImgList = createSlice({
    name: 'addImgList',
    initialState: {
        imgList : [],
        cropImgList : [],
        cropImgPositionList : [],
        selectedMainImgIndex : 0,
    },
    reducers: {
        addNewImgToList : (state, action) => {
            state.imgList.push(action.payload);
            state.selectedMainImgIndex = state.imgList.length - 1;
        },
        setMainImgByIndex : (state, action) => {
            state.selectedMainImgIndex = action.payload;
        },
        //[{"cropDefaultPosition":{}, "cropConfirmPosition":{}},{}]
        setImgCropPositionByIndex : (state, action) =>{
            const {index, cropData} = action.payload;
            state.cropImgPositionList[index]["cropConfirmPosition"] = cropData;
        },
        setImgCropDefaultPositionByIndex : (state, action) =>{
            const {index, cropData} = action.payload;
            state.cropImgPositionList[index]["cropDefaultPosition"] = cropData;
        },
        addNewImgCropItem : state =>{
            state.cropImgPositionList.push({"cropDefaultPosition":"", "cropConfirmPosition":""});
        },
        addCropImgList : (state, action) =>{
            state.cropImgList.push(action.payload);
        },
        removeAllCropList: state =>{
            state.cropImgList = [];
        },
        removeImgFromList : (state, action) => {
            let index = action.payload;
            state.imgList.splice(index, 1);
            state.cropImgList.splice(index, 1);
            state.cropImgPositionList.splice(index, 1);
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