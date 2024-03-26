import { createSlice } from '@reduxjs/toolkit';


export const titleHint = createSlice({
    name: 'titleHint',
    initialState: {
        titleHintArr:[]
    },
    reducers: {
        setTitleHintArr: (state,action) => {
            state.titleHintArr = action.payload;
        },
      },
  });

export const { setTitleHintArr } = titleHint.actions;
export default titleHint.reducer;