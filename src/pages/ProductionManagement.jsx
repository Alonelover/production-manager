import React, { useState } from 'react';
import ProcessSteps from '../components/ProcessSteps';
import ProductionTable from '../components/ProductionTable';
import ProcessDetails from '../components/ProcessDetails';
import '../styles/ProductionManagement.css';

/**
 * 生产管理页面组件
 * 用于展示和管理生产相关的信息，包括生产计划和过程管理
 * @returns {JSX.Element} 生产管理页面的渲染内容
 */
const ProductionManagement = () => {
  // 定义当前工序状态，默认值为'A'
  const [currentProcess, setCurrentProcess] = useState('A');
  
  return (
    // 生产管理页面的主容器
    <div className="production-management">
      {/* 页面头部区域 */}
      <div className="header">
        {/* 标签页切换区域 */}
        <div className="tabs">
          {/* 生产计划标签（当前激活） */}
          <span className="tab active">生产计划</span>
          {/* 过程管理标签 */}
          <span className="tab">过程管理</span>
        </div>
      </div>
      
      {/* 工序步骤组件，传入当前工序状态 */}
      <ProcessSteps currentProcess={currentProcess} />
      {/* 工序详情组件 */}
      <ProcessDetails />
      {/* 生产数据表格组件 */}
      <ProductionTable />
    </div>
  );
};

// 导出生产管理页面组件
export default ProductionManagement; 