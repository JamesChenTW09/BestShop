import { createSlice } from '@reduxjs/toolkit';


export const searchText = createSlice({
    name: 'searchText',
    initialState: {
      searchText:""
    },
    reducers: {
        setSearchValue: (state,action) => {
            state.searchText = action.payload;
          },
      },
  });

export const { setSearchValue } = searchText.actions;
export default searchText.reducer;