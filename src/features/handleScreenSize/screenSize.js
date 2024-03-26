import { createSlice } from '@reduxjs/toolkit';


export const screenSize = createSlice({
    name: 'screenSize',
    initialState: {
        screenWidth : window.innerWidth
    },
    reducers: {
        setScreenSize: (state, action) => {
          state.screenWidth = action.payload;
        },
      },
  });

export const { setScreenSize } = screenSize.actions;
export default screenSize.reducer;