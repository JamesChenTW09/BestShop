import React, {useEffect} from 'react'
import "../Style/Util/Warning.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { removeWarnText, showWarnBlock, setWarnConfirmFunc, useExternalFunction } from '../features/handleBoolean/toggleWarnBlock.js';

/*
    dispatch(updateWarnText(text));
    dispatch(showWarnBlock(true));
    setWarnConfirmFunc(removeTourBlock);
*/ 

export default function Warning() {
  const warnText = useSelector((state) => state.toggleWarnBlock.warnText);
  const ifHideScroll = useSelector((state) => state.toggleWarnBlock.ifHideScroll);

  const dispatch = useDispatch();

  const removeWarnBlock = ()=>{
    dispatch(showWarnBlock(false));
    dispatch(removeWarnText());
  }
  const confirmDeleteTour = ()=>{
    useExternalFunction();
    removeWarnBlock();
    setWarnConfirmFunc(null);
  }

  useEffect(() => {
    document.querySelector('html').style.overflowY = 'hidden';
    if(!ifHideScroll){
      return () => {
        document.querySelector('html').style.overflowY = 'auto';
      };
    }
  }, []);

  return (
    <div>
      <div onClick={removeWarnBlock} className='warningBackground'></div>
      <div className='warningFloatWin'>
        <div className='warnTextContainer'>
            <FontAwesomeIcon icon={faTriangleExclamation} className="navIcons" />
            {warnText}
        </div>
        <div className='confirmContainer'>
          <div  onClick={removeWarnBlock} className='cancelWarning'>取消</div>
          <div  onClick={confirmDeleteTour} className='confirmWarning'>確定</div>
        </div>
      </div>
    </div>
  )
}
