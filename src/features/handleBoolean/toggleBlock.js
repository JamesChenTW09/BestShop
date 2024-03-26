import { createSlice } from '@reduxjs/toolkit';


export const toggleTourBlock = createSlice({
    name: 'toggleBlock',
    initialState: {
      tourDetailBlock:{},
      addEventBlock:false
    },
    reducers: {
      setIfShowBlockDetail:(state,action) => {
        const {ifShow, id} = action.payload
        document.querySelector("html").style.overflowY = ifShow? "hidden" : "auto";
        state.tourDetailBlock[id] = ifShow;
      },
      setIfshowAddEventBlock: (state, action) => {
        const ifShow = action.payload;
        document.querySelector("html").style.overflowY = ifShow?"hidden":"auto";
        state.addEventBlock = ifShow;
      },
    },
  });

export const { setIfShowBlockDetail, setIfshowAddEventBlock } = toggleTourBlock.actions;
export default toggleTourBlock.reducer;