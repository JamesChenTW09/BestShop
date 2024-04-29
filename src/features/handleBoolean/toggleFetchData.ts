import { createSlice } from '@reduxjs/toolkit';


export const toggleFetchData = createSlice({
    name: 'toggleFetchData',
    initialState: {
        ifReFetchMainPage : true
    },
    reducers: {
        setIfFetchMainPage: (state, action) => {
          state.ifReFetchMainPage = action.payload;
        },
      },
  });

export const { setIfFetchMainPage } = toggleFetchData.actions;
export default toggleFetchData.reducer;