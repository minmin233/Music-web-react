import React, { memo } from 'react';

import { headerLinks } from "../../common/local-data";
import { NavLink } from 'react-router-dom';
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';

export default memo(function YyHeader() {

  const showSelectItem=(item,index)=>{
    if(index<3){
      return(
        <div>
          <NavLink to={item.link}>
            {item.title}
            <i className="sprite_01 icon"></i>
          </NavLink>
        </div>
      )
    }else{
      return(
        <a className="sprite_01" href={item.link}>{item.title}</a>
      )
    }
  }


    return (
        <HeaderWrapper>
          <div className="content wrap-v1">
            <HeaderLeft>
              <a href="#/" className="logo sprite_01">网易云音乐</a>
              <div class="select-list">
                {
                  headerLinks.map((item,index)=>{
                    return(
                      <div key={item.title} className="select-item" exact>
                        {showSelectItem(item,index)}
                      </div>
                    )
                  })
                }
              </div>
            </HeaderLeft>
            <HeaderRight>right</HeaderRight>
            
          </div>
          <div className="divider"></div>
        </HeaderWrapper>
    );
});
