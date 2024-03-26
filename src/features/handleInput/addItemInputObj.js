import { createSlice } from '@reduxjs/toolkit';


export const addItemInputObj = createSlice({
    name: 'itemDetail',
    initialState: {
        addItemDetailArr:[]
    },
    reducers: {
        addNewItemDetail: state => {
            state.addItemDetailArr.push({ starCount : 0, price : "", name : ""});
        },
        removeItemDetailByIndex: (state,action) => {
            state.addItemDetailArr.splice(action.payload, 1);
        },
        setItemDetailByIndex: (state, action) => {
            const { name, value, index } = action.payload;
            state.addItemDetailArr[index][name] = value;
        },
        setItemDetailArrToDefault: state => {
            state.addItemDetailArr = [];
        }
      },
  });


export const { addNewItemDetail , removeItemDetailByIndex , setItemDetailByIndex, setItemDetailArrToDefault} = addItemInputObj.actions;
export default addItemInputObj.reducer;