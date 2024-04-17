import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';


export const addItemInputObj = createSlice({
    name: 'itemDetail',
    initialState: {
        addItemDetailArr:[]
    },
    reducers: {
        addNewItemDetail: state => {
            const id = uuidv4();
            state.addItemDetailArr.push({ starCount : 0, price : "", name : "", id});
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