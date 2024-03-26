import { configureStore } from '@reduxjs/toolkit';
import toggleBlock from '../features/handleBoolean/toggleBlock';
import toggleFetchData from '../features/handleBoolean/toggleFetchData';
import toggleWarnBlock from '../features/handleBoolean/toggleWarnBlock';
import toggleDropDown from '../features/handleBoolean/toggleDropDown';

import searchText from '../features/handleInput/searchText';
import addItemInputObj from '../features/handleInput/addItemInputObj';
import orderObj from "../features/handleInput/orderObj";
import titleHint from '../features/handleInput/titleHint';

import screenSize from '../features/handleScreenSize/screenSize';
import addImgList from '../features/handleAddImgs/addImgList';


export default configureStore({
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
    titleHint
  },
});