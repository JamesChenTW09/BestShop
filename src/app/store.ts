import { configureStore } from '@reduxjs/toolkit';
import toggleBlock from '../features/handleBoolean/toggleBlock';
import toggleFetchData from '../features/handleBoolean/toggleFetchData';
import toggleWarnBlock from '../features/handleBoolean/toggleWarnBlock';
import toggleDropDown from '../features/handleBoolean/toggleDropDown';

import searchText from '../features/handleInput/searchText';
import addItemInputObj from '../features/handleInput/addItemInputObj';
import orderObj from "../features/handleInput/orderObj";

import screenSize from '../features/handleScreenSize/screenSize';
import addImgList from '../features/handleAddImgs/addImgList';


const store = configureStore({
  reducer: {
    toggleBlock,
    searchText,
    toggleFetchData,
    addItemInputObj,
    toggleWarnBlock,
    toggleDropDown,
    screenSize,
    orderObj,
    addImgList,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;