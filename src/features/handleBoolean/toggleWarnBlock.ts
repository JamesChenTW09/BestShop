import { createSlice } from '@reduxjs/toolkit';

let externalFunction = null;


export const toggleWarnBlock = createSlice({
    name: 'toggleWarnBlock',
    initialState: {
        ifShowWarnBlock : false,
        ifHideScroll : false,
        warnText : "",
    },
    reducers: {
        showWarnBlock: (state, action) => {
          state.ifShowWarnBlock = action.payload;
        },
        hideScroll: (state, action) => {
          state.ifHideScroll = action.payload;
        },
        updateWarnText: (state, action) => {
          state.warnText = action.payload;
        },
        removeWarnText: state => {
          state.warnText = "";
        },
      },
  });

  export const setWarnConfirmFunc = (func) => {
    externalFunction = func;
  };
  
  // 在 reducer 中使用外部 function
  export const useExternalFunction = () => {
    if (externalFunction) {
      externalFunction();
    }
  };
export const { showWarnBlock,  updateWarnText, removeWarnText, hideScroll} = toggleWarnBlock.actions;
export default toggleWarnBlock.reducer;