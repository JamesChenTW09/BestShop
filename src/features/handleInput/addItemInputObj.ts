import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface AddItemDetail{
    addItemDetailArr: Array<{
        starCount: number,
        price: string,
        name: string,
        id: string,
        [key: string]: any;
    }>
}

const initialState: AddItemDetail = {
    addItemDetailArr:[]
}

export const addItemInputObj = createSlice({
    name: 'itemDetail',
    initialState,
    reducers: {
        addNewItemDetail: state => {
            const id = uuidv4();
            state.addItemDetailArr = [...state.addItemDetailArr, { starCount : 0, price : "", name : "", id}]
        },
        removeItemDetailByIndex: (state,action) => {
            state.addItemDetailArr = state.addItemDetailArr.filter((item, index)=> index !== action.payload)
        },
        setItemDetailByIndex: (state, action) => {
            const { name, value, index } = action.payload;
            let newItemDetailArr = state.addItemDetailArr.slice();
            newItemDetailArr[index][name] = value;
            state.addItemDetailArr = newItemDetailArr;
        },
        setItemDetailArrToDefault: state => {
            state.addItemDetailArr = [];
        }
      },
  });


export const { addNewItemDetail , removeItemDetailByIndex , setItemDetailByIndex, setItemDetailArrToDefault} = addItemInputObj.actions;
export default addItemInputObj.reducer;