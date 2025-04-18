/*
 * @Author: tErrAn 2487373152@qq.com
 * @Date: 2025-04-18 17:45:11
 * @LastEditors: tErrAn 2487373152@qq.com
 * @LastEditTime: 2025-04-18 17:47:05
 * @FilePath: \close_fitness_2D\components\leftbanner\index.jsx
 * @Description: 
 */

import React, { useState } from 'react';
import './banner.module.css';

export const CollapsibleSidebar = ({ 
  isInitiallyOpen = true,
  children 
}) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button 
        className="toggle-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '◀' : '▶'}
      </button>
      
      <div className="sidebar-content">
        {isOpen && children}
      </div>
    </div>
  );
};