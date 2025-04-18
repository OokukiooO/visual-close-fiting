/*
 * @Author: tErrAn 2487373152@qq.com
 * @Date: 2025-04-18 17:47:12
 * @LastEditors: tErrAn 2487373152@qq.com
 * @LastEditTime: 2025-04-18 19:43:26
 * @FilePath: \close_fitness_2D\components\displayPart\index.jsx
 * @Description: 
 */

// displayPart/index.jsx (MainLayout组件)
import React from 'react';
import { NavbarWithDropdown } from '../header/index';
import { CollapsibleSidebar } from '../leftbanner/index';
import style from './display.module.css';

export const MainLayout = ({ 
  navbarTitle,
  menuItems,
  sidebarContent,
  mainContent
}) => {
  return (
    <div className={style.mainContainer}>
      <NavbarWithDropdown 
        title={navbarTitle}
        menuItems={menuItems}
      />
      
      <div className={style.contentWrapper}>
        <CollapsibleSidebar>
          {sidebarContent}
        </CollapsibleSidebar>
        
        <div className={style.mainContent}>
          {mainContent}
        </div>
      </div>
    </div>
  );
};