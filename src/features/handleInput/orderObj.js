import { createSlice } from '@reduxjs/toolkit';


export const orderObj = createSlice({
    name: 'orderText',
    initialState: {
      orderText:"最新",
      orderKey:1000142
    },
    reducers: {
        setOrderObj: (state,action) => {
          const {orderText, orderKey} = action.payload;
          state.orderText = orderText;
          state.orderKey = orderKey;
        }
      },
  });

export const { setOrderObj } = orderObj.actions;
export default orderObj.reducer;