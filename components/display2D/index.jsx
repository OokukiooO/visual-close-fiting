/*
 * @Author: tErrAn 2487373152@qq.com
 * @Date: 2025-04-18 19:57:05
 * @LastEditors: tErrAn 2487373152@qq.com
 * @LastEditTime: 2025-04-18 21:26:58
 * @FilePath: \close_fitness_2D\components\display2D\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// import React, { useState, useCallback } from 'react';
import React, { useState } from 'react';
import axios from 'axios';
import _ from './display2D.module.css';

export const Display2D = () => {
  const [prompt, setPrompt] = useState('');
  const [clothingImage, setClothingImage] = useState(null);
  const [poseImage, setPoseImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
//   const [resultImage, setResultImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);
// setPreviewImage(previewUrl);

//     // 设置下载功能
//     setDownloadUrl(previewUrl);

  // 处理文件拖拽
  const handleDrop = (setter) => (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file.type.startsWith('image/')) {
      setter(file);
    }
  };

  // 处理文件选择
  const handleFileSelect = (setter) => (e) => {
    const file = e.target.files[0];
    if (file) setter(file);
  };

  // 提交处理
  const handleSubmit = async () => {
    if (!prompt || !clothingImage || !poseImage) {
      setError('请填写所有必填字段');
      return;
    }

    try {
      setIsProcessing(true);
      setError(null);

      // 创建表单数据
      const formData = new FormData();
      formData.append('prompt', prompt);
      formData.append('clothing_image', clothingImage);
      formData.append('pose_image', poseImage);

      // 先保存到数据库
    //   await axios.post('/api/save-request', {
    //     prompt,
    //     state: 'isProcessing'
    //   });

      // 发送生成请求
      const response = await axios.post(
        '/api/api/virtual_try_on',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'ngrok-skip-browser-warning': 'true'
          },
          responseType: 'blob' // 转换结果为二进制，重要更改
        }
      );

      if (response.status === 200) {
        // 创建图片URL
        // const imageUrl = URL.createObjectURL(new Blob([response.data]));
        // setResultImage(imageUrl);
        // 创建 Blob
    const blob = new Blob([response.data], { type: 'image/jpeg' });
    
    // 生成预览
    const previewUrl = URL.createObjectURL(blob);
    setPreviewImage(previewUrl);

    // 设置下载功能
    setDownloadUrl(previewUrl);
        // 更新数据库状态
        // await axios.patch('/api/update-request', {
        //   state: 'success',
        //   imageUrl
        // });
      }
    } catch (err) {
      setError(err.response?.data?.error || '请求失败，请稍后重试');
    } finally {
      setIsProcessing(false);
    }
  };

  // 下载处理
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'generated-image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={_.main}>
      <div className={_.formContainer}>
        {/* 文字描述输入 */}
        <div className={_.inputGroup}>
          <label>风格描述：</label>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="请输入服装风格描述"
          />
        </div>

        {/* 服装图片上传 */}
        <div className={_.uploadSection}>
          <label>上传服装图片：</label>
          <div 
            className={_.dropZone}
            onDrop={handleDrop(setClothingImage)}
            onDragOver={(e) => e.preventDefault()}
          >
            {clothingImage ? (
              <img 
                src={URL.createObjectURL(clothingImage)} 
                alt="服装预览"
                className={_.previewImage}
              />
            ) : (
              <>
                <p>拖放图片到这里</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect(setClothingImage)}
                />
              </>
            )}
          </div>
        </div>

        {/* 姿势图片上传 */}
        <div className={_.uploadSection}>
          <label>上传姿势图片：</label>
          <div
            className={_.dropZone}
            onDrop={handleDrop(setPoseImage)}
            onDragOver={(e) => e.preventDefault()}
          >
            {poseImage ? (
              <img
                src={URL.createObjectURL(poseImage)}
                alt="姿势预览"
                className={_.previewImage}
              />
            ) : (
              <>
                <p>拖放图片到这里</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect(setPoseImage)}
                />
              </>
            )}
          </div>
        </div>

        {/* 提交按钮 */}
        <button
          className={_.submitButton}
          onClick={handleSubmit}
          disabled={isProcessing}
        >
          {isProcessing ? '生成中...' : '开始生成'}
        </button>

        {/* 状态显示 */}
        {isProcessing && (
          <div className={_.statusMessage}>
            <div className={_.loader} />
            图片正在生成中...
          </div>
        )}

        {error && <div className={_.errorMessage}>{error}</div>}

        {previewImage && (
        //   <div className={_.resultSection}>
        //     <p className={_.successMessage}>
        //       图片生成成功，点击下方按钮下载
        //     </p>
        //     <button
        //       className={_.downloadButton}
        //       onClick={handleDownload}
        //     >
        //       下载图片
        //     </button>
        //   </div>
        <div className={_.previewSection}>
        <img 
        src={previewImage} 
        alt="生成结果预览"
        className={_.resultPreview}
        />
        <button
        className={_.downloadButton}
        onClick={handleDownload}
        >
        下载高清图片
        </button>
    </div>
        )}
      </div>
    </div>
  );
};