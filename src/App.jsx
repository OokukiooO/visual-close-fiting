/*
 * @Author: tErrAn 2487373152@qq.com
 * @Date: 2025-04-18 17:38:16
 * @LastEditors: tErrAn 2487373152@qq.com
 * @LastEditTime: 2025-04-18 20:24:10
 * @FilePath: \close_fitness_2D\src\App.jsx
 * @Description: 
 */

// App.js
import { useState } from 'react';
import { MainLayout } from '../components/displayPart/index';
import './App.css';
import {Display2D} from '../components/display2D/index';

// 主要窗口页面
// const Display2D = () => <div className="content-box">2D试衣效果界面</div>;
const ClothingSample = () => <div className="content-box">服装样本库界面</div>;
const TryOnLibrary = () => <div className="content-box">试衣对象库界面</div>;
const Display3D = () => <div className="content-box">3D试衣效果界面</div>;
const FunctionIntro = () => <div className="content-box">功能介绍界面</div>;
const ProjectIntro = () => <div className="content-box">项目介绍界面</div>;
const UploadList = () => <div className="content-box">文件上传列表界面</div>;
const Generate2DList = () => <div className="content-box">2D生成列表界面</div>;
const Generate3DList = () => <div className="content-box">3D生成列表界面</div>;
const ContactUs = () => <div className="content-box">联系我们界面</div>;
const TeamProfile = () => <div className="content-box">团队概况界面</div>;
const FuturePlan = () => <div className="content-box">未来发展界面</div>;

// 使用常量管理视图键名
const VIEW_KEYS = {
  DISPLAY_2D: '2D试衣效果',
  CLOTHING_SAMPLE: '服装样本库',
  TRYON_LIBRARY: '试衣对象库',
  DISPLAY_3D: '3D试衣效果',
  FUNCTION_INTRO: '功能介绍',
  PROJECT_INTRO: '项目介绍',
  UPLOAD_LIST: '文件上传列表',
  GENERATE_2D_LIST: '2D生成列表',
  GENERATE_3D_LIST: '3D生成列表',
  CONTACT_US: '联系我们',
  TEAM_PROFILE: '团队概况',
  FUTURE_PLAN: '未来发展'
};

// 内容映射表
const contentMap = {
  [VIEW_KEYS.DISPLAY_2D]: <Display2D />,
  [VIEW_KEYS.CLOTHING_SAMPLE]: <ClothingSample />,
  [VIEW_KEYS.TRYON_LIBRARY]: <TryOnLibrary />,
  [VIEW_KEYS.DISPLAY_3D]: <Display3D />,
  [VIEW_KEYS.FUNCTION_INTRO]: <FunctionIntro />,
  [VIEW_KEYS.PROJECT_INTRO]: <ProjectIntro />,
  [VIEW_KEYS.UPLOAD_LIST]: <UploadList />,
  [VIEW_KEYS.GENERATE_2D_LIST]: <Generate2DList />,
  [VIEW_KEYS.GENERATE_3D_LIST]: <Generate3DList />,
  [VIEW_KEYS.CONTACT_US]: <ContactUs />,
  [VIEW_KEYS.TEAM_PROFILE]: <TeamProfile />,
  [VIEW_KEYS.FUTURE_PLAN]: <FuturePlan />
};


function App() {
  const [currentView, setCurrentView] = useState(null);
  // 菜单配置
  const menuItems = {
    tag1: [
      { label: VIEW_KEYS.DISPLAY_2D, action: () => setCurrentView(VIEW_KEYS.DISPLAY_2D) },
      { label: VIEW_KEYS.CLOTHING_SAMPLE, action: () => setCurrentView(VIEW_KEYS.CLOTHING_SAMPLE) },
      { label: VIEW_KEYS.TRYON_LIBRARY, action: () => setCurrentView(VIEW_KEYS.TRYON_LIBRARY) },
      { label: VIEW_KEYS.DISPLAY_3D, action: () => setCurrentView(VIEW_KEYS.DISPLAY_3D) }
    ],
    tag2: [
      { label: VIEW_KEYS.FUNCTION_INTRO, action: () => setCurrentView(VIEW_KEYS.FUNCTION_INTRO) },
      { label: VIEW_KEYS.PROJECT_INTRO, action: () => setCurrentView(VIEW_KEYS.PROJECT_INTRO) }
    ],
    tag3: [
      { label: VIEW_KEYS.UPLOAD_LIST, action: () => setCurrentView(VIEW_KEYS.UPLOAD_LIST) },
      { label: VIEW_KEYS.GENERATE_2D_LIST, action: () => setCurrentView(VIEW_KEYS.GENERATE_2D_LIST) },
      { label: VIEW_KEYS.GENERATE_3D_LIST, action: () => setCurrentView(VIEW_KEYS.GENERATE_3D_LIST) }
    ],
    tag4: [
      { label: VIEW_KEYS.CONTACT_US, action: () => setCurrentView(VIEW_KEYS.CONTACT_US) },
      { label: VIEW_KEYS.TEAM_PROFILE, action: () => setCurrentView(VIEW_KEYS.TEAM_PROFILE) },
      { label: VIEW_KEYS.FUTURE_PLAN, action: () => setCurrentView(VIEW_KEYS.FUTURE_PLAN) }
    ]
  };

  return (
    <MainLayout
      navbarTitle="../logo.png"
      menuItems={menuItems}
      sidebarContent={
        <div>
          <h3>Filters</h3>
          {/* 筛选组件 */}
        </div>
      }
      mainContent={contentMap[currentView] || <DefaultView />}
    />
  );
}

// 默认显示内容
const DefaultView = () => (
  <div className="default-view">
    <h1>欢迎使用虚拟试衣系统</h1>
    <p>请从顶部菜单选择要使用的功能</p>
  </div>
);

export default App;
