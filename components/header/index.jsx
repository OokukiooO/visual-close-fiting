// NavbarWithDropdown.jsx
import React, { useState, useRef, useEffect } from 'react';
import _ from './header.module.css';

// 独立的下拉按钮组件
const DropdownButton = ({ tagName, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={_.dropdownContainer} ref={dropdownRef}>
      <button
        className={_.dropdownToggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        {tagName} ▾
      </button>
      
      {isOpen && (
        <ul className={_.dropdownMenu}>
          {menuItems.map((item, index) => (
            <li 
              key={index} 
              className={_.menuItem}
              onClick={() => {
                item.action();
                setIsOpen(false);
              }}>
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// 主组件
export const NavbarWithDropdown = ({ title, menuItems }) => {
  return (
    <div className={_.headerNavbar}>
      <div className={_.navbarBrand}><img src={title} alt="logo" /></div>
      
      <DropdownButton tagName="立即试衣" menuItems={menuItems.tag1} />
      <DropdownButton tagName="项目介绍" menuItems={menuItems.tag2} />
      <DropdownButton tagName="下载列表" menuItems={menuItems.tag3} />
      <DropdownButton tagName="关于我们" menuItems={menuItems.tag4} />
    </div>
  );
};