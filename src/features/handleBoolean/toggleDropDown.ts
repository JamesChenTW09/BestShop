import { createSlice } from '@reduxjs/toolkit';

interface ShowDropDown{
  key:string,
  ifShow:boolean
}

export const toggleDropDown = createSlice({
    name: 'toggleDropDown',
    initialState: {
       logInDropDown : false,
       orderDropDown : false,
    },
    reducers: {
        showDropDown: (state, action) => {
          const {key, ifShow} = action.payload as ShowDropDown;
          if(key === "logInDropDown" || key === "orderDropDown") state[key] = ifShow;
        },
        removeAllDropDown: state =>{
          state["logInDropDown"] = false;
          state["orderDropDown"] = false;
        }
      },
  });

export const { showDropDown, removeAllDropDown } = toggleDropDown.actions;
export default toggleDropDown.reducer;