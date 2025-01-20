import React, { useState } from 'react';

/**
 * 工序详情组件
 * 显示加料熔化、取样检测和出炉三个阶段的详细信息
 */
const ProcessDetails = () => {
  // 状态管理
  const [furnaceNo, setFurnaceNo] = useState('230802E02'); // 炉次号
  const [material, setMaterial] = useState('ZL-6S'); // 材质
  const [plannedWeight, setPlannedWeight] = useState(3000); // 计划投入重量
  const [actualWeight, setActualWeight] = useState(3000); // 实际投入重量
  const [remainingWeight, setRemainingWeight] = useState(0); // 剩余投入重量
  const [processTime, setProcessTime] = useState('2023-08-15 09:56:01'); // 本炉开始熔化时间
  const [elapsedTime, setElapsedTime] = useState('37天23:18:7'); // 已熔化时间
  const [totalWeight, setTotalWeight] = useState('35759.78'); // 实际加料量
  const [manualTemp, setManualTemp] = useState(''); // 手动温度输入

  // 物料清单数据
  const materials = [
    { name: '高碳铬铁', type: '辅料', planned: 325, actual: 8072.3, remaining: 0, difference: -7747.30 },
    { name: 'HP-1S', type: '辅料', planned: 650, actual: 3297, remaining: 0, difference: -2647.00 },
    { name: '镍', type: '辅料', planned: 0, actual: 195, remaining: 0, difference: -1.95 },
    { name: '高碳铬钢', type: '辅料', planned: 2070, actual: 12984, remaining: 0, difference: -10914.00 },
    { name: 'ZL-7S', type: '辅料', planned: 600, actual: 2201, remaining: 0, difference: -1601.00 },
    { name: 'HP-4S', type: '辅料', planned: 480, actual: 1520, remaining: 0, difference: -1040.00 },
    { name: 'HP-2S', type: '辅料', planned: 280, actual: 2765, remaining: 0, difference: -2485.00 },
    { name: 'HP-10', type: '辅料', planned: 500, actual: 495, remaining: 0, difference: 5.00 },
  ];

  return (
    <div className="process-details">
      {/* 工序进度指示器 */}
      <div className="process-steps">
        <div className="step">
          <div className="step-number">01</div>
          <div className="step-name">加料熔化</div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div className="step-name">取样检测</div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div className="step-name">出炉</div>
        </div>
      </div>

      {/* 基本信息区域 */}
      <div className="basic-info">
        <div className="info-row">
          <div className="info-item">
            <label>炉次号</label>
            <select value={furnaceNo} onChange={(e) => setFurnaceNo(e.target.value)}>
              <option value="230802E02">230802E02</option>
            </select>
          </div>
          <div className="info-item">
            <label>材质</label>
            <input type="text" value={material} readOnly />
          </div>
          <div className="info-item">
            <label>计划投入重量</label>
            <input type="number" value={plannedWeight} readOnly />
            <span>kg</span>
          </div>
          <div className="info-item">
            <label>实际投入重量</label>
            <input type="number" value={actualWeight} readOnly />
            <span>kg</span>
          </div>
          <div className="info-item">
            <label>剩余投入重量</label>
            <input type="number" value={remainingWeight} readOnly />
            <span>kg</span>
          </div>
        </div>
      </div>

      {/* 操作按钮区域 */}
      <div className="action-buttons">
        <button className="btn-primary">取样送检</button>
        <button className="btn-secondary">自动加料中</button>
        <button className="btn-warning">开始熔化</button>
        <button className="btn-success">结束送样</button>
      </div>

      {/* 时间信息区域 */}
      <div className="time-info">
        <div>本炉开始熔化时间：{processTime}</div>
        <div>已熔化时间：{elapsedTime}</div>
        <div>实际加料量：{totalWeight} kg</div>
      </div>

      {/* 温度记录区域 */}
      <div className="temperature-section">
        <div className="temp-box">
          <h4>取样温度 - 工艺标准</h4>
          <div className="temp-content">1470-1500</div>
        </div>
        <div className="temp-box">
          <h4>取样温度 - 测量记录</h4>
          <div className="temp-table">
            <div className="temp-header">
              <span>测量时间</span>
              <span>测量值</span>
            </div>
          </div>
        </div>
        <div className="temp-box">
          <h4>手动温度 - 温度记录</h4>
          <div className="temp-table">
            <div className="temp-header">
              <span>测量时间</span>
              <span>测量值</span>
            </div>
          </div>
          <div className="manual-input">
            <input 
              type="number" 
              value={manualTemp} 
              onChange={(e) => setManualTemp(e.target.value)}
              placeholder="温度"
            />
            <button className="btn-confirm">确认</button>
            <button className="btn-add">手动添加</button>
          </div>
        </div>
      </div>

      {/* 物料清单表格 */}
      <div className="materials-table">
        <table>
          <thead>
            <tr>
              <th>物料名称</th>
              <th>物料类型</th>
              <th>配比</th>
              <th>配料重量(kg)</th>
              <th>已加重量计划(kg)</th>
              <th>已加重量手工(kg)</th>
              <th>剩余加料重量(kg)</th>
              <th>本次手动添加(kg)</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {materials.map((material, index) => (
              <tr key={index}>
                <td>{material.name}</td>
                <td>{material.type}</td>
                <td>-</td>
                <td>{material.planned}</td>
                <td>{material.actual}</td>
                <td>0</td>
                <td>{material.difference}</td>
                <td>
                  <input type="number" placeholder="本次添加重量" />
                </td>
                <td>
                  <button className="btn-modify">修改</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProcessDetails;