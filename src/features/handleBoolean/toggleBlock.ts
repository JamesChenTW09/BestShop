import { createSlice } from '@reduxjs/toolkit';

interface ToggleTourBlock{
  addEventBlock:boolean,
  tourDetailBlock:{
    [key: string]:boolean
  }
}
const initialState: ToggleTourBlock = {
  addEventBlock:false,
  tourDetailBlock:{}
}

export const toggleTourBlock = createSlice({
    name: 'toggleBlock',
    initialState,
    reducers: {
      setIfShowBlockDetail:(state,action) => {
          const {ifShow, id} = action.payload
          const htmlElement = document.querySelector("html") as HTMLHtmlElement;
          htmlElement.style.overflowY = ifShow? "hidden" : "auto";
          state.tourDetailBlock = {...state.tourDetailBlock, [id]:ifShow};
      },
      setIfshowAddEventBlock: (state, action) => {
        const ifShow = action.payload;
        const htmlElement = document.querySelector("html") as HTMLHtmlElement;
        htmlElement.style.overflowY = ifShow?"hidden":"auto";
        state.addEventBlock = ifShow;
      },
    },
  });

export const { setIfShowBlockDetail, setIfshowAddEventBlock } = toggleTourBlock.actions;
export default toggleTourBlock.reducer;